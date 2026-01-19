import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SOURCE_DIR = path.resolve(__dirname, '..'); // Parent directory (where the content folders are)
const OUTPUT_DIR = path.join(__dirname, 'public', 'content');
const DATA_FILE = path.join(__dirname, 'src', 'data.json');
const IGNORE_DIRS = ['app-visor', 'node_modules', '.git', '.gemini', '.vscode'];

// Helpers
const cleanDirectory = (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
};

const isImage = (file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file);
const isText = (file) => /\.(txt|md)$/i.test(file);

function generateData() {
  console.log('🚀 Starting content generation...');
  
  // 1. Clean output directory
  cleanDirectory(OUTPUT_DIR);
  console.log('🧹 Cleaned public/content directory.');

  const items = [];
  
  // 2. Read source directory
  const entries = fs.readdirSync(SOURCE_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (IGNORE_DIRS.includes(entry.name)) continue;

    const folderName = entry.name;
    const folderPath = path.join(SOURCE_DIR, folderName);
    const folderSlug = folderName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Create destination folder
    const destFolder = path.join(OUTPUT_DIR, folderSlug);
    fs.mkdirSync(destFolder, { recursive: true });

    // Scan for content
    const files = fs.readdirSync(folderPath);
    
    let textContent = '';
    let images = [];
    let title = folderName.replace(/_/g, ' '); // Default title from folder
    let cover = null;

    for (const file of files) {
      const srcFile = path.join(folderPath, file);
      const destFile = path.join(destFolder, file);

      if (isImage(file)) {
        // Copy image
        fs.copyFileSync(srcFile, destFile);
        const webPath = `/content/${folderSlug}/${file}`;
        images.push(webPath);
        
        // Determine cover (PORTADA or first image)
        if (file.toLowerCase().includes('portada') || !cover) {
          cover = webPath;
        }
      } else if (isText(file) && !textContent) {
        // Read text (only the first text file found to avoid duplicates/confusion)
        const rawText = fs.readFileSync(srcFile, 'utf-8');
        textContent = rawText;
        
        // Try to extract a better title from the first line? 
        // For now, let's keep the folder name or use the first non-empty line if it looks like a title.
        // Let's stick to folder name for stability, or user can edit json later.
      }
    }

    if (images.length > 0 || textContent) {
      items.push({
        id: folderSlug,
        title: title,
        text: textContent,
        images: images,
        cover: cover || images[0] || null // Fallback to first image
      });
      console.log(`✅ Processed: ${folderName}`);
    }
  }

  // 3. Write JSON
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
  console.log(`🎉 Generated data.json with ${items.length} items.`);
}

generateData();
