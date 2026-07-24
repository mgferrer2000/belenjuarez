type NotionImageKind = 'block' | 'cover';

const MOBILE_IMAGE_WIDTHS = [640, 960] as const;

export const getNotionMobileImageSrcSet = (id: string, kind: NotionImageKind) => {
    if (!import.meta.env.PROD || !id) {
        return undefined;
    }

    const idParameter = kind === 'cover' ? 'pageId' : 'blockId';
    const baseUrl = `/notion-proxy.php?action=getImage&${idParameter}=${encodeURIComponent(id)}`;

    return MOBILE_IMAGE_WIDTHS
        .map(width => `${baseUrl}&width=${width} ${width}w`)
        .join(', ');
};
