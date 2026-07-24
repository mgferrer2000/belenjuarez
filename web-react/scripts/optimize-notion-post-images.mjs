import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const API_BASE = 'https://api.notion.com/v1';
const API_VERSION = '2026-03-11';
const MAX_DIMENSION = 2000;
const JPEG_QUALITY = 85;
const MIN_SAVING_RATIO = 0.03;
const DEFAULT_PAGE_ID = '3960435d-6d4d-802f-bb10-c739344ad722';

const args = new Map(
  process.argv.slice(2).map((argument) => {
    const [key, ...valueParts] = argument.replace(/^--/, '').split('=');
    return [key, valueParts.length ? valueParts.join('=') : true];
  }),
);

const applyChanges = args.has('apply');
const pageId = String(args.get('page') || DEFAULT_PAGE_ID);

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const readEnvFile = async (filePath) => {
  const values = {};
  const contents = await fs.readFile(filePath, 'utf8');

  for (const line of contents.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    values[match[1]] = match[2].trim().replace(/^(['"])(.*)\1$/, '$2');
  }

  return values;
};

const env = await readEnvFile(path.resolve('.env.local'));
const notionToken = env.NOTION_API_KEY || env.VITE_NOTION_API_KEY;

if (!notionToken) {
  throw new Error('Falta NOTION_API_KEY o VITE_NOTION_API_KEY en .env.local');
}

const requestNotion = async (endpoint, options = {}) => {
  const headers = {
    Authorization: `Bearer ${notionToken}`,
    'Notion-Version': API_VERSION,
    ...options.headers,
  };

  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await fetch(endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`, {
      ...options,
      headers,
      body: options.body && !(options.body instanceof FormData)
        ? JSON.stringify(options.body)
        : options.body,
    });

    if (response.status === 429 && attempt < 3) {
      const retryAfter = Number.parseFloat(response.headers.get('Retry-After') || '1');
      await sleep(Math.max(1000, retryAfter * 1000));
      continue;
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(`Notion ${response.status}: ${data?.message || text || response.statusText}`);
    }

    return data;
  }

  throw new Error('Notion no respondió después de varios reintentos');
};

const listChildren = async (blockId) => {
  const blocks = [];
  let cursor = null;

  do {
    const query = new URLSearchParams({ page_size: '100' });
    if (cursor) query.set('start_cursor', cursor);
    const response = await requestNotion(`/blocks/${blockId}/children?${query}`);
    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  const descendants = [];
  for (const block of blocks) {
    descendants.push(block);
    if (block.has_children) {
      descendants.push(...await listChildren(block.id));
    }
  }

  return descendants;
};

const getImageUrl = (fileObject) => fileObject?.file?.url || fileObject?.external?.url || null;

const toWritableRichText = (items = []) => items.map((item) => {
  const base = {
    type: item.type,
    annotations: item.annotations,
  };

  if (item.type === 'text') {
    return {
      ...base,
      text: {
        content: item.text?.content ?? item.plain_text ?? '',
        link: item.text?.link || null,
      },
    };
  }

  if (item.type === 'equation') {
    return { ...base, equation: item.equation };
  }

  if (item.type === 'mention') {
    return { ...base, mention: item.mention };
  }

  return item;
});

const contentTypeExtension = (contentType) => {
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('webp')) return '.webp';
  if (contentType.includes('svg')) return '.svg';
  if (contentType.includes('tiff')) return '.tiff';
  return '.jpg';
};

const downloadImage = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`No se pudo descargar la imagen (${response.status})`);
  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get('Content-Type') || 'image/jpeg',
  };
};

const optimizeImage = async (buffer, contentType) => {
  if (contentType.includes('gif') || contentType.includes('svg')) {
    return { buffer, contentType, extension: contentTypeExtension(contentType), skipped: 'formato preservado' };
  }

  const metadata = await sharp(buffer, { animated: true }).metadata();
  if ((metadata.pages || 1) > 1) {
    return { buffer, contentType, extension: contentTypeExtension(contentType), metadata, skipped: 'imagen animada' };
  }

  const pipeline = sharp(buffer)
    .rotate()
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: 'inside',
      withoutEnlargement: true,
    });

  let output;
  let outputContentType;
  let extension;

  if (metadata.hasAlpha) {
    output = await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true, palette: true, quality: 90 }).toBuffer();
    outputContentType = 'image/png';
    extension = '.png';
  } else {
    output = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    outputContentType = 'image/jpeg';
    extension = '.jpg';
  }

  const outputMetadata = await sharp(output).metadata();
  const savingRatio = 1 - output.length / buffer.length;

  if (savingRatio < MIN_SAVING_RATIO) {
    return {
      buffer,
      contentType,
      extension: contentTypeExtension(contentType),
      metadata,
      outputMetadata: metadata,
      savingRatio: 0,
      skipped: 'sin ahorro suficiente',
    };
  }

  return {
    buffer: output,
    contentType: outputContentType,
    extension,
    metadata,
    outputMetadata,
    savingRatio,
  };
};

const uploadFile = async (buffer, filename, contentType) => {
  const upload = await requestNotion('/file_uploads', {
    method: 'POST',
    body: { mode: 'single_part', filename, content_type: contentType },
  });

  const form = new FormData();
  form.append('file', new Blob([buffer], { type: contentType }), filename);

  const uploaded = await requestNotion(upload.upload_url || `/file_uploads/${upload.id}/send`, {
    method: 'POST',
    body: form,
  });

  if (uploaded.status !== 'uploaded') {
    throw new Error(`La subida ${upload.id} no terminó correctamente`);
  }

  return upload.id;
};

const page = await requestNotion(`/pages/${pageId}`);
const titleProperty = Object.values(page.properties || {}).find((property) => property.type === 'title');
const pageTitle = titleProperty?.title?.map((item) => item.plain_text).join('') || pageId;
const blocks = await listChildren(pageId);
const imageItems = blocks
  .filter((block) => block.type === 'image' && getImageUrl(block.image))
  .map((block) => ({
    kind: 'block',
    id: block.id,
    url: getImageUrl(block.image),
    caption: toWritableRichText(block.image.caption || []),
  }));

if (getImageUrl(page.cover)) {
  imageItems.unshift({ kind: 'cover', id: pageId, url: getImageUrl(page.cover), caption: [] });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDir = path.resolve('.notion-backups', `${timestamp}-${pageId}`);
const originalsDir = path.join(backupDir, 'originals');
const optimizedDir = path.join(backupDir, 'optimized');
await fs.mkdir(originalsDir, { recursive: true });
await fs.mkdir(optimizedDir, { recursive: true });

const manifest = {
  createdAt: new Date().toISOString(),
  pageId,
  pageTitle,
  applied: applyChanges,
  settings: { maxDimension: MAX_DIMENSION, jpegQuality: JPEG_QUALITY, minSavingRatio: MIN_SAVING_RATIO },
  images: [],
};

console.log(`Post: ${pageTitle}`);
console.log(`Imágenes encontradas: ${imageItems.length}`);
console.log(`Copia local: ${backupDir}`);

for (let index = 0; index < imageItems.length; index += 1) {
  const item = imageItems[index];
  const position = String(index + 1).padStart(2, '0');
  const downloaded = await downloadImage(item.url);
  const optimized = await optimizeImage(downloaded.buffer, downloaded.contentType);
  const originalExtension = contentTypeExtension(downloaded.contentType);
  const originalFilename = `${position}-${item.kind}-${item.id}${originalExtension}`;
  const optimizedFilename = `${position}-${item.kind}-${item.id}${optimized.extension}`;
  const originalPath = path.join(originalsDir, originalFilename);
  const optimizedPath = path.join(optimizedDir, optimizedFilename);

  await fs.writeFile(originalPath, downloaded.buffer);
  await fs.writeFile(optimizedPath, optimized.buffer);

  const record = {
    ...item,
    url: item.url,
    originalFilename,
    optimizedFilename,
    originalBytes: downloaded.buffer.length,
    optimizedBytes: optimized.buffer.length,
    savingRatio: optimized.savingRatio || 0,
    originalDimensions: optimized.metadata ? { width: optimized.metadata.width, height: optimized.metadata.height } : null,
    optimizedDimensions: optimized.outputMetadata ? { width: optimized.outputMetadata.width, height: optimized.outputMetadata.height } : null,
    skipped: optimized.skipped || null,
    updated: false,
  };

  manifest.images.push(record);
  await fs.writeFile(path.join(backupDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const savingPercent = Math.round(record.savingRatio * 100);
  console.log(`[${position}/${imageItems.length}] ${Math.round(record.originalBytes / 1024)} KB -> ${Math.round(record.optimizedBytes / 1024)} KB (${savingPercent}% ahorro)${record.skipped ? `, ${record.skipped}` : ''}`);

  if (!applyChanges || record.skipped) continue;

  const uploadId = await uploadFile(optimized.buffer, optimizedFilename, optimized.contentType);

  if (item.kind === 'cover') {
    await requestNotion(`/pages/${pageId}`, {
      method: 'PATCH',
      body: { cover: { type: 'file_upload', file_upload: { id: uploadId } } },
    });
  } else {
    await requestNotion(`/blocks/${item.id}`, {
      method: 'PATCH',
      body: {
        image: {
          file_upload: { id: uploadId },
          caption: item.caption,
        },
      },
    });
  }

  record.uploadId = uploadId;
  record.updated = true;
  await fs.writeFile(path.join(backupDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  await sleep(350);
}

const updatedCount = manifest.images.filter((image) => image.updated).length;
const originalTotal = manifest.images.reduce((total, image) => total + image.originalBytes, 0);
const optimizedTotal = manifest.images.reduce((total, image) => total + image.optimizedBytes, 0);

if (applyChanges) {
  const verificationPage = await requestNotion(`/pages/${pageId}`);
  const verificationBlocks = await listChildren(pageId);
  const verificationImages = verificationBlocks.filter((block) => block.type === 'image').length + (verificationPage.cover ? 1 : 0);

  if (verificationImages !== imageItems.length) {
    throw new Error(`Verificación fallida: se esperaban ${imageItems.length} imágenes y se encontraron ${verificationImages}`);
  }
}

console.log(`Actualizadas: ${updatedCount}/${imageItems.length}`);
console.log(`Peso total: ${(originalTotal / 1024 / 1024).toFixed(2)} MB -> ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Ahorro: ${originalTotal ? Math.round((1 - optimizedTotal / originalTotal) * 100) : 0}%`);
