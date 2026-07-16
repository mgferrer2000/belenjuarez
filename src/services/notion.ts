import type { Locale } from '../../i18n/config';

const isDev = import.meta.env.DEV;

// Local development still goes to Vite's proxy, but Production uses our secure PHP bridge
const API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;
const REVIEWS_DATABASE_ID = import.meta.env.VITE_NOTION_REVIEWS_DATABASE_ID;
const NOTION_VERSION = '2022-06-28';
const MAX_CONCURRENT_NOTION_REQUESTS = 3;

export type NotionSection = 'blog' | 'reviews';

let activeNotionRequests = 0;
const notionRequestQueue: Array<() => void> = [];
const inFlightPostRequests = new Map<string, Promise<BlogPost | null>>();
const inFlightBlockRequests = new Map<string, Promise<any[]>>();

const processNotionQueue = () => {
    while (activeNotionRequests < MAX_CONCURRENT_NOTION_REQUESTS && notionRequestQueue.length > 0) {
        const nextRequest = notionRequestQueue.shift();
        nextRequest?.();
    }
};

const scheduleNotionRequest = <T>(request: () => Promise<T>): Promise<T> => new Promise((resolve, reject) => {
    notionRequestQueue.push(() => {
        activeNotionRequests += 1;
        request()
            .then(resolve, reject)
            .finally(() => {
                activeNotionRequests -= 1;
                processNotionQueue();
            });
    });

    processNotionQueue();
});

const fetchNotion = (input: RequestInfo | URL, init?: RequestInit) => scheduleNotionRequest(async () => {
    let response = await fetch(input, init);

    for (let attempt = 0; response.status === 429 && attempt < 2; attempt += 1) {
        const retryAfter = Number.parseFloat(response.headers.get('Retry-After') || '');
        const delay = Number.isFinite(retryAfter) ? retryAfter * 1000 : 1000 * (attempt + 1);
        await new Promise(resolve => window.setTimeout(resolve, delay));
        response = await fetch(input, init);
    }

    return response;
});

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    coverImage?: string;
    tags: string[];
}

const normalizePropertyName = (name: string) => name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

const findProperty = (properties: Record<string, any>, names: string[]) => {
    const normalizedNames = names.map(normalizePropertyName);

    return Object.entries(properties).find(([propertyName]) =>
        normalizedNames.includes(normalizePropertyName(propertyName))
    )?.[1];
};

const extractTags = (page: any): string[] => {
    const properties = page?.properties ?? {};
    const tagProperty = findProperty(properties, ['Etiqueta', 'Etiquetas', 'Tag', 'Tags']);

    if (!tagProperty) {
        return [];
    }

    if (tagProperty.type === 'multi_select' && Array.isArray(tagProperty.multi_select)) {
        return tagProperty.multi_select
            .map((option: any) => option?.name?.trim())
            .filter((name: string | undefined): name is string => Boolean(name));
    }

    if (tagProperty.type === 'select' && tagProperty.select?.name) {
        return [tagProperty.select.name.trim()].filter(Boolean);
    }

    if (tagProperty.type === 'rich_text' && Array.isArray(tagProperty.rich_text)) {
        return tagProperty.rich_text
            .map((item: any) => item?.plain_text?.trim())
            .filter((name: string | undefined): name is string => Boolean(name));
    }

    if (tagProperty.type === 'formula' && typeof tagProperty.formula?.string === 'string') {
        return tagProperty.formula.string
            .split(',')
            .map((name: string) => name.trim())
            .filter(Boolean);
    }

    if (tagProperty.type === 'status' && tagProperty.status?.name) {
        return [tagProperty.status.name.trim()].filter(Boolean);
    }

    return [];
};

const extractTitle = (page: any): string => {
    const properties = page?.properties ?? {};
    const titleProp =
        findProperty(properties, ['Título', 'Titulo', 'Name', 'Title']) ||
        Object.values(properties).find((property: any) => property?.type === 'title');

    return (titleProp as any)?.title?.[0]?.plain_text || 'Sin título';
};

const extractDate = (page: any): string => {
    const properties = page?.properties ?? {};
    const dateProp = findProperty(properties, ['Fecha', 'Date']);
    return dateProp?.date?.start || page?.created_time || new Date().toISOString();
};

const getNotionLanguage = (locale: Locale) => locale === 'fr' ? 'Français' : 'Español';

const getDatabaseId = (section: NotionSection) =>
    section === 'reviews' ? REVIEWS_DATABASE_ID : DATABASE_ID;

const extractPageLanguage = (page: any): string => {
    const languageProperty = findProperty(page?.properties ?? {}, ['Idioma', 'Language', 'Langue']);
    return languageProperty?.select?.name || 'Español';
};

const extractOriginalSpanishId = (page: any): string => {
    const originalProperty = findProperty(page?.properties ?? {}, ['Original ES', 'Original español']);
    return originalProperty?.rich_text
        ?.map((item: any) => item?.plain_text || '')
        .join('')
        .trim() || '';
};

const mapPageToPost = (page: any): BlogPost => ({
    id: page.id,
    title: extractTitle(page),
    date: extractDate(page),
    coverImage: page.cover?.external?.url || page.cover?.file?.url,
    tags: extractTags(page),
});

const getHeaders = () => {
    // Solo se necesitan cabeceras completas si atacamos directo a Notion en modo DEV
    if (isDev) {
        return {
            'Authorization': `Bearer ${API_KEY}`,
            'Notion-Version': NOTION_VERSION,
            'Content-Type': 'application/json',
        };
    }
    return {};
};

export const getPublishedPosts = async (locale: Locale = 'es', section: NotionSection = 'blog'): Promise<BlogPost[]> => {
    try {
        let response;
        const databaseId = getDatabaseId(section);

        if (isDev && databaseId) {
            // MODO DESARROLLO (Vite Localhost Proxy)
            response = await fetchNotion(`/notion-api/v1/databases/${databaseId}/query`, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({
                    filter: {
                        and: [
                            { property: 'Publicado', checkbox: { equals: true } },
                            { property: 'Idioma', select: { equals: getNotionLanguage(locale) } },
                        ],
                    },
                }),
            });
        } else {
            // MODO PRODUCCIÓN (Hostinger PHP Proxy)
            response = await fetchNotion(`/notion-proxy.php?action=getPosts&locale=${locale}&section=${section}`);
        }

        if (!response.ok) {
            throw new Error(`Proxy/API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const results = Array.isArray(data.results) ? data.results : [];

        return results
            .filter((page: any) => page?.id && page?.properties)
            .map(mapPageToPost)
            .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (err) {
        console.error("Notion API Error:", err);
        return [];
    }
};

const fetchDevPage = async (pageId: string): Promise<any | null> => {
    const response = await fetchNotion(`/notion-api/v1/pages/${pageId}`, {
        method: 'GET',
        headers: getHeaders(),
    });

    if (!response.ok) {
        return null;
    }

    return response.json();
};

const findDevFrenchTranslation = async (spanishPageId: string, section: NotionSection): Promise<any | null> => {
    const databaseId = getDatabaseId(section);
    if (!databaseId) {
        return null;
    }

    const response = await fetchNotion(`/notion-api/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            filter: {
                and: [
                    { property: 'Publicado', checkbox: { equals: true } },
                    { property: 'Idioma', select: { equals: 'Français' } },
                    { property: 'Original ES', rich_text: { equals: spanishPageId } },
                ],
            },
            page_size: 1,
        }),
    });

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return data.results?.[0] || null;
};

const resolveDevLocalizedPage = async (pageId: string, locale: Locale, section: NotionSection): Promise<any | null> => {
    const sourcePage = await fetchDevPage(pageId);
    if (!sourcePage) {
        return null;
    }

    const sourceLanguage = extractPageLanguage(sourcePage);
    if (sourceLanguage === getNotionLanguage(locale)) {
        return sourcePage;
    }

    if (locale === 'es') {
        const originalId = extractOriginalSpanishId(sourcePage);
        return originalId ? (await fetchDevPage(originalId) || sourcePage) : sourcePage;
    }

    const originalId = sourceLanguage === 'Français'
        ? extractOriginalSpanishId(sourcePage)
        : sourcePage.id;

    return originalId ? (await findDevFrenchTranslation(originalId, section) || sourcePage) : sourcePage;
};

export const getPost = async (pageId: string, locale: Locale = 'es', section: NotionSection = 'blog'): Promise<BlogPost | null> => {
    const requestKey = `${section}:${locale}:${pageId}`;
    const existingRequest = inFlightPostRequests.get(requestKey);
    if (existingRequest) {
        return existingRequest;
    }

    const request = (async () => {
        try {
            let response;
            let page;

            if (isDev) {
                page = await resolveDevLocalizedPage(pageId, locale, section);
            } else {
                response = await fetchNotion(`/notion-proxy.php?action=getPost&pageId=${pageId}&locale=${locale}&section=${section}`);
                if (!response.ok) {
                    throw new Error(`Proxy/API error: ${response.status} ${response.statusText}`);
                }
                page = await response.json();
            }

            if (!page?.id || !page?.properties) {
                return null;
            }

            return mapPageToPost(page);
        } catch (err) {
            console.error("Notion API Error querying single post:", err);
            return null;
        }
    })();

    inFlightPostRequests.set(requestKey, request);

    try {
        return await request;
    } finally {
        if (inFlightPostRequests.get(requestKey) === request) {
            inFlightPostRequests.delete(requestKey);
        }
    }
};

export const getPostContent = async (blockId: string): Promise<any[]> => {
    const existingRequest = inFlightBlockRequests.get(blockId);
    if (existingRequest) {
        return existingRequest;
    }

    const request = (async () => {
        try {
            let response;

            if (isDev) {
                response = await fetchNotion(`/notion-api/v1/blocks/${blockId}/children?page_size=100`, {
                    method: 'GET',
                    headers: getHeaders(),
                });
            } else {
                response = await fetchNotion(`/notion-proxy.php?action=getBlocks&blockId=${blockId}`);
            }

            if (!response.ok) {
                throw new Error(`Proxy/API blocks error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            const blocks = data.results || [];

            await Promise.all(blocks.map(async (block: any) => {
                if (block.has_children && (block.type === 'column_list' || block.type === 'column')) {
                    block.children = await getPostContent(block.id);
                }
            }));

            return blocks;
        } catch (err) {
            console.error("Notion blocks fetch error:", err);
            return [];
        }
    })();

    inFlightBlockRequests.set(blockId, request);

    try {
        return await request;
    } finally {
        if (inFlightBlockRequests.get(blockId) === request) {
            inFlightBlockRequests.delete(blockId);
        }
    }
};
