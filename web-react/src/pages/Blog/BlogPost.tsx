import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostContent, getPost, BlogPost, type NotionSection } from '../../services/notion';
import { ArrowLeft, Calendar } from 'lucide-react';
import NotionResponsiveImage from '../../components/NotionResponsiveImage';
import { useI18n } from '../../../i18n/I18nProvider';
import { BLOG_MESSAGES, LITERARY_REVIEWS_MESSAGES, type BlogMessages } from '../../../i18n/blogMessages';

type RichTextAnnotation = {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
};

type RichTextItem = {
    plain_text?: string;
    href?: string | null;
    annotations?: RichTextAnnotation;
    text?: {
        link?: {
            url?: string;
        } | null;
    };
};

type NotionBlock = {
    id: string;
    type: string;
    has_children?: boolean;
    children?: NotionBlock[];
    [key: string]: any;
};

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

type DeferredNotionImageProps = {
    blockId: string;
    src: string;
    alt: string;
    loadingLabel: string;
    pendingLabel: string;
    errorLabel: string;
};

const DeferredNotionImage: React.FC<DeferredNotionImageProps> = ({ blockId, src, alt, loadingLabel, pendingLabel, errorLabel }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setShouldLoad(false);
        setIsLoaded(false);
        setHasError(false);

        const container = containerRef.current;
        if (!container || !('IntersectionObserver' in window)) {
            setShouldLoad(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '240px 0px' },
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [src]);

    return (
        <div
            ref={containerRef}
            className="relative flex min-h-48 w-full items-center justify-center overflow-hidden bg-ink/[0.025] md:min-h-64"
            aria-busy={shouldLoad && !isLoaded && !hasError}
        >
            {!isLoaded && !hasError ? (
                <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    {shouldLoad ? loadingLabel : pendingLabel}
                </span>
            ) : null}

            {shouldLoad ? (
                <NotionResponsiveImage
                    notionId={blockId}
                    notionKind="block"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    className={cx(
                        'h-auto max-w-full object-contain transition-opacity duration-500',
                        isLoaded ? 'opacity-100' : 'opacity-0',
                    )}
                />
            ) : null}

            {hasError ? (
                <span className="px-6 py-12 text-center font-serif italic text-ink/45">
                    {errorLabel}
                </span>
            ) : null}
        </div>
    );
};

const renderPlainTextWithBreaks = (text: string) => {
    const parts = text.split('\n');

    return parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
            {part}
            {index < parts.length - 1 ? <br /> : null}
        </Fragment>
    ));
};

const renderRichText = (richText: RichTextItem[] = []) => {
    if (!richText.length) {
        return null;
    }

    return richText.map((item, index) => {
        const text = item.plain_text ?? '';
        const annotations = item.annotations ?? {};
        const colorClass = annotations.color && annotations.color !== 'default' ? 'text-deep-red' : '';
        const link = item.href || item.text?.link?.url;

        let node: ReactNode = renderPlainTextWithBreaks(text);

        if (annotations.bold) node = <strong key={`b-${index}`}>{node}</strong>;
        if (annotations.italic) node = <em key={`i-${index}`}>{node}</em>;
        if (annotations.strikethrough) node = <s key={`s-${index}`}>{node}</s>;
        if (annotations.underline) node = <u key={`u-${index}`}>{node}</u>;
        if (annotations.code) node = <code key={`c-${index}`} className="font-mono text-[0.9em] bg-ink/5 px-1.5 py-0.5 rounded-sm">{node}</code>;
        
        if (colorClass || annotations.bold || annotations.italic || annotations.strikethrough || annotations.underline || annotations.code) {
            node = (
                <span
                    key={`span-${index}`}
                    className={cx(
                        !annotations.bold && !annotations.italic && !annotations.strikethrough && !annotations.underline && !annotations.code && colorClass,
                        colorClass
                    )}
                >
                    {node}
                </span>
            );
        }

        if (link) {
            node = (
                <a
                    key={`link-${index}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-deep-red decoration-deep-red/50 underline underline-offset-4 hover:text-ink transition-colors"
                >
                    {node}
                </a>
            );
        }

        return <Fragment key={`${item.plain_text ?? 'segment'}-${index}`}>{node}</Fragment>;
    });
};

const getBlockRichText = (block: NotionBlock): RichTextItem[] => {
    const value = block[block.type];
    return value?.rich_text ?? [];
};

const getPlainText = (richText: RichTextItem[]) => richText.map(item => item.plain_text ?? '').join('');

const getYouTubeEmbedUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        const host = parsedUrl.hostname.replace(/^www\./, '').replace(/^m\./, '');
        const isYouTubeHost = host === 'youtube.com' || host === 'youtu.be' || host === 'music.youtube.com' || host === 'youtube-nocookie.com';

        if (!isYouTubeHost) {
            return null;
        }

        let videoId = '';

        if (host === 'youtu.be') {
            videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] ?? '';
        } else if (parsedUrl.pathname === '/watch') {
            videoId = parsedUrl.searchParams.get('v') ?? '';
        } else if (parsedUrl.pathname.startsWith('/shorts/')) {
            videoId = parsedUrl.pathname.split('/').filter(Boolean)[1] ?? '';
        } else if (parsedUrl.pathname.startsWith('/live/')) {
            videoId = parsedUrl.pathname.split('/').filter(Boolean)[1] ?? '';
        } else if (parsedUrl.pathname.startsWith('/embed/')) {
            videoId = parsedUrl.pathname.split('/').filter(Boolean)[1] ?? '';
        }

        if (!videoId) {
            return null;
        }

        const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
        const playlistId = parsedUrl.searchParams.get('list');

        if (playlistId) {
            embedUrl.searchParams.set('list', playlistId);
        }

        embedUrl.searchParams.set('rel', '0');
        return embedUrl.toString();
    } catch {
        return null;
    }
};

const isPoetryParagraph = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim().length > 0);

    if (lines.length < 2) {
        return false;
    }

    const averageLength = lines.reduce((sum, line) => sum + line.trim().length, 0) / lines.length;
    return averageLength <= 42 || text.includes('\n\n');
};

function renderBlock(block: NotionBlock, imageMessages: Pick<BlogMessages, 'imageAltPrefix' | 'loadingImage' | 'pendingImage' | 'imageError'>) {
    const type = block.type;
    const richText = getBlockRichText(block);
    const text = getPlainText(richText);
    const content = renderRichText(richText);
    const value = block[type];

    switch (type) {
        case 'heading_1':
            return <h1 key={block.id} className="text-4xl font-serif text-ink mt-12 mb-6 leading-tight">{content}</h1>;
        case 'heading_2':
            return <h2 key={block.id} className="text-3xl font-serif text-ink mt-10 mb-4 leading-tight">{content}</h2>;
        case 'heading_3':
            return <h3 key={block.id} className="text-2xl font-serif text-ink mt-8 mb-4 leading-tight">{content}</h3>;
        case 'paragraph':
            if (!text.trim()) {
                return <div key={block.id} className="h-6" aria-hidden="true" />;
            }

            return (
                <p
                    key={block.id}
                    className={cx(
                        'text-ink/80 font-serif text-lg',
                        isPoetryParagraph(text)
                            ? 'mb-8 leading-[1.95] whitespace-pre-wrap max-w-2xl'
                            : 'mb-6 leading-relaxed whitespace-pre-wrap',
                    )}
                >
                    {content}
                </p>
            );
        case 'quote':
            return (
                <blockquote
                    key={block.id}
                    className="pl-6 border-l-4 border-deep-red text-ink/75 italic font-serif my-8 text-xl leading-relaxed whitespace-pre-wrap"
                >
                    {content}
                </blockquote>
            );
        case 'callout':
            return (
                <div key={block.id} className="my-8 border border-deep-red/20 bg-deep-red/5 px-5 py-4 rounded-sm text-ink/80 font-serif text-lg leading-relaxed whitespace-pre-wrap">
                    {content}
                </div>
            );
        case 'divider':
            return <hr key={block.id} className="my-10 border-0 border-t border-ink/10" />;
        case 'column_list': {
            const cols = block.children?.length || 1;
            const gridClass = cols === 3 ? 'md:grid-cols-3' : cols === 2 ? 'md:grid-cols-2' : 'grid-cols-1';
            return (
                <div key={block.id} className={`grid grid-cols-1 ${gridClass} gap-6 my-8 items-start`}>
                    {block.children ? renderBlocks(block.children, imageMessages) : null}
                </div>
            );
        }
        case 'column':
            return (
                <div key={block.id} className="flex flex-col gap-4">
                    {block.children ? renderBlocks(block.children, imageMessages) : null}
                </div>
            );
        case 'video': {
            const videoUrl = value?.file?.url || value?.external?.url;
            const caption = value?.caption?.length ? renderRichText(value.caption) : null;
            
            if (!videoUrl) return null;
            
            if (value?.type === 'external') {
                const embedUrl = getYouTubeEmbedUrl(videoUrl) ?? videoUrl;

                return (
                    <figure key={block.id} className="my-10 flex flex-col items-center">
                        <div className="w-full aspect-video rounded-sm overflow-hidden border border-ink/10 bg-ink/5">
                            <iframe 
                                src={embedUrl} 
                                title="Embedded Video"
                                loading="lazy"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>
                        {caption ? <figcaption className="mt-3 text-sm text-ink/55 font-sans leading-relaxed text-center">{caption}</figcaption> : null}
                    </figure>
                );
            }
            
            return (
                <figure key={block.id} className="my-10 flex flex-col items-center">
                    <video controls className="w-full rounded-sm border border-ink/10 bg-ink/5">
                        <source src={videoUrl} />
                        Tu navegador no soporta la etiqueta de vídeo.
                    </video>
                    {caption ? <figcaption className="mt-3 text-sm text-ink/55 font-sans leading-relaxed text-center">{caption}</figcaption> : null}
                </figure>
            );
        }
        case 'image': {
            const imageUrl = value?.file?.url || value?.external?.url;
            const caption = value?.caption?.length ? renderRichText(value.caption) : null;

            if (!imageUrl) {
                return null;
            }

            return (
                <figure key={block.id} className="my-10 text-center flex flex-col items-center">
                    <div className="w-full rounded-sm border border-ink/10 overflow-hidden">
                        <DeferredNotionImage
                            blockId={block.id}
                            src={imageUrl}
                            alt={getPlainText(value?.caption ?? []) || postTitleFallback(block, imageMessages.imageAltPrefix)}
                            loadingLabel={imageMessages.loadingImage}
                            pendingLabel={imageMessages.pendingImage}
                            errorLabel={imageMessages.imageError}
                        />
                    </div>
                    {caption ? <figcaption className="mt-3 text-sm text-ink/55 font-sans leading-relaxed">{caption}</figcaption> : null}
                </figure>
            );
        }
        case 'code':
            return (
                <pre key={block.id} className="my-8 overflow-x-auto rounded-sm bg-ink text-paper p-5 text-sm leading-relaxed">
                    <code>{text}</code>
                </pre>
            );
        default:
            if (!text.trim()) {
                return null;
            }

            return (
                <p key={block.id} className="mb-6 text-ink/80 leading-relaxed font-serif text-lg whitespace-pre-wrap">
                    {content}
                </p>
            );
    }
};

const postTitleFallback = (block: NotionBlock, prefix: string) => `${prefix} ${block.id}`;

function renderBlocks(blocks: NotionBlock[], imageMessages: Pick<BlogMessages, 'imageAltPrefix' | 'loadingImage' | 'pendingImage' | 'imageError'>) {
    const elements: ReactNode[] = [];

    for (let index = 0; index < blocks.length; index += 1) {
        const block = blocks[index];

        if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
            const isBulleted = block.type === 'bulleted_list_item';
            const listItems: NotionBlock[] = [block];

            while (index + 1 < blocks.length && blocks[index + 1].type === block.type) {
                index += 1;
                listItems.push(blocks[index]);
            }

            const ListTag = isBulleted ? 'ul' : 'ol';
            const listClassName = isBulleted
                ? 'mb-8 ml-6 list-disc space-y-2 text-ink/80 font-serif text-lg'
                : 'mb-8 ml-6 list-decimal space-y-2 text-ink/80 font-serif text-lg';

            elements.push(
                <ListTag key={`list-${block.id}`} className={listClassName}>
                    {listItems.map(item => (
                        <li key={item.id} className="pl-1 leading-relaxed whitespace-pre-wrap">
                            {renderRichText(getBlockRichText(item))}
                        </li>
                    ))}
                </ListTag>
            );

            continue;
        }

        elements.push(renderBlock(block, imageMessages));
    }

    return elements;
};

type BlogPostViewProps = {
    section?: NotionSection;
};

const BlogPostView: React.FC<BlogPostViewProps> = ({ section = 'blog' }) => {
    const { id } = useParams<{ id: string }>();
    const { locale, path } = useI18n();
    const contentMessages = section === 'reviews'
        ? LITERARY_REVIEWS_MESSAGES[locale]
        : BLOG_MESSAGES[locale];
    const sectionPath = section === 'reviews' ? '/resenas-literarias' : '/blog';
    const [post, setPost] = useState<BlogPost | null>(null);
    const [content, setContent] = useState<NotionBlock[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            if (!id) return;

            try {
                setLoading(true);
                setPost(null);
                setContent([]);

                const currentPost = await getPost(id, locale, section);
                const blocks = currentPost ? await getPostContent(currentPost.id) : [];
                if (currentPost) setPost(currentPost);
                setContent(blocks);
            } catch (error) {
                console.error('Error fetching post content:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id, locale, section]);

    if (loading) {
        return (
            <div className="min-h-screen bg-paper pt-32 flex justify-center items-center">
                <div className="animate-spin w-8 h-8 border-t-2 border-deep-red rounded-full"></div>
            </div>
        );
    }

    if (!post && !content.length) {
        return (
            <div className="min-h-screen bg-paper pt-32 text-center text-ink">
                <h1 className="text-2xl font-serif">{contentMessages.articleNotFound}</h1>
                <Link to={path(sectionPath)} className="text-deep-red mt-4 inline-block hover:underline">{contentMessages.backToBlog}</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-paper text-ink pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 mb-12">
                <Link to={path(sectionPath)} className="inline-flex items-center gap-2 text-deep-red hover:text-ink/70 transition-colors uppercase tracking-widest text-xs font-mono mb-12">
                    <ArrowLeft size={14} /> {contentMessages.backToIndex}
                </Link>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-6 font-mono">
                    <Calendar size={14} />
                    <time dateTime={post?.date}>
                        {post?.date ? new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }) : contentMessages.unknownDate}
                    </time>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-ink leading-tight mb-8">
                    {post?.title}
                </h1>
            </div>

            {post?.coverImage && (
                <div className="max-w-5xl mx-auto px-6 mb-12">
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-white rounded-sm overflow-hidden border border-ink/10">
                        <NotionResponsiveImage
                            notionId={post.id}
                            notionKind="cover"
                            src={post.coverImage}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto px-6">
                <div className="max-w-none">
                    {renderBlocks(content, contentMessages)}
                </div>
            </div>
        </article>
    );
};

export default BlogPostView;
