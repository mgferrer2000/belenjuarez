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

const extractTags = (page: any): string[] => {
    const properties = page?.properties ?? {};
    const tagProperty =
        properties.Etiqueta ||
        properties.Etiquetas ||
        properties.Tag ||
        properties.Tags;

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

    return [];
};

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
                    sorts: [{ property: 'Fecha', direction: 'descending' }],
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

        return data.results.map((page: any) => {
            const titleProp = page.properties.Título || page.properties.Name || page.properties.Title || Object.values(page.properties).find((p: any) => p.type === 'title');
            const title = (titleProp as any)?.title?.[0]?.plain_text || 'Sin título';

            return {
                id: page.id,
                title: title,
                date: page.properties.Fecha?.date?.start || page.properties.Date?.date?.start || page.created_time,
                coverImage: page.cover?.external?.url || page.cover?.file?.url,
                tags: extractTags(page),
            };
        });
    } catch (err) {
        console.error("Notion API Error:", err);
        return [];
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
