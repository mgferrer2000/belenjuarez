const isDev = import.meta.env.DEV;

// Local development still goes to Vite's proxy, but Production uses our secure PHP bridge
const API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;
const NOTION_VERSION = '2022-06-28';

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

export const getPublishedPosts = async (): Promise<BlogPost[]> => {
    try {
        let response;

        if (isDev && DATABASE_ID) {
            // MODO DESARROLLO (Vite Localhost Proxy)
            response = await fetch(`/notion-api/v1/databases/${DATABASE_ID}/query`, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({
                    filter: { property: 'Publicado', checkbox: { equals: true } },
                }),
            });
        } else {
            // MODO PRODUCCIÓN (Hostinger PHP Proxy)
            response = await fetch('/notion-proxy.php?action=getPosts');
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

export const getPost = async (pageId: string): Promise<BlogPost | null> => {
    try {
        let response;

        if (isDev) {
            response = await fetch(`/notion-api/v1/pages/${pageId}`, {
                method: 'GET',
                headers: getHeaders(),
            });
        } else {
            response = await fetch(`/notion-proxy.php?action=getPost&pageId=${pageId}`);
        }

        if (!response.ok) {
            throw new Error(`Proxy/API error: ${response.status} ${response.statusText}`);
        }

        const page = await response.json();

        if (!page?.id || !page?.properties) {
            return null;
        }

        return mapPageToPost(page);
    } catch (err) {
        console.error("Notion API Error querying single post:", err);
        return null;
    }
};

export const getPostContent = async (blockId: string): Promise<any[]> => {
    try {
        let response;

        if (isDev) {
            response = await fetch(`/notion-api/v1/blocks/${blockId}/children?page_size=100`, {
                method: 'GET',
                headers: getHeaders(),
            });
        } else {
            response = await fetch(`/notion-proxy.php?action=getBlocks&blockId=${blockId}`);
        }

        if (!response.ok) {
            throw new Error(`Proxy/API blocks error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const blocks = data.results || [];

        // Fetch children recursively for specific nested blocks
        for (const block of blocks) {
            if (block.has_children && (block.type === 'column_list' || block.type === 'column')) {
                block.children = await getPostContent(block.id);
            }
        }

        return blocks;
    } catch (err) {
        console.error("Notion blocks fetch error:", err);
        return [];
    }
};
