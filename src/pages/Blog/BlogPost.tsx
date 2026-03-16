import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostContent, getPublishedPosts, BlogPost } from '../../services/notion';
import { ArrowLeft, Calendar } from 'lucide-react';

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
    [key: string]: any;
};

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

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

const isPoetryParagraph = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim().length > 0);

    if (lines.length < 2) {
        return false;
    }

    const averageLength = lines.reduce((sum, line) => sum + line.trim().length, 0) / lines.length;
    return averageLength <= 42 || text.includes('\n\n');
};

const renderBlock = (block: NotionBlock) => {
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
        case 'image': {
            const imageUrl = value?.file?.url || value?.external?.url;
            const caption = value?.caption?.length ? renderRichText(value.caption) : null;

            if (!imageUrl) {
                return null;
            }

            return (
                <figure key={block.id} className="my-10">
                    <img src={imageUrl} alt={getPlainText(value?.caption ?? []) || postTitleFallback(block)} className="w-full rounded-sm border border-ink/10" />
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

const postTitleFallback = (block: NotionBlock) => `Imagen del post ${block.id}`;

const renderBlocks = (blocks: NotionBlock[]) => {
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

        elements.push(renderBlock(block));
    }

    return elements;
};

const BlogPostView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [content, setContent] = useState<NotionBlock[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            if (!id) return;

            try {
                const posts = await getPublishedPosts();
                const currentPost = posts.find(p => p.id === id);
                if (currentPost) setPost(currentPost);

                const blocks = await getPostContent(id);
                setContent(blocks);
            } catch (error) {
                console.error('Error fetching post content:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id]);

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
                <h1 className="text-2xl font-serif">Artículo no encontrado</h1>
                <Link to="/blog" className="text-deep-red mt-4 inline-block hover:underline">Volver al blog</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-paper text-ink pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 mb-12">
                <Link to="/blog" className="inline-flex items-center gap-2 text-deep-red hover:text-ink/70 transition-colors uppercase tracking-widest text-xs font-mono mb-12">
                    <ArrowLeft size={14} /> Volver al índice
                </Link>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-6 font-mono">
                    <Calendar size={14} />
                    <time dateTime={post?.date}>
                        {post?.date ? new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }) : 'Fecha desconocida'}
                    </time>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-ink leading-tight mb-8">
                    {post?.title}
                </h1>
            </div>

            {post?.coverImage && (
                <div className="max-w-5xl mx-auto px-6 mb-12">
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-white rounded-sm overflow-hidden border border-ink/10">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto px-6">
                <div className="max-w-none">
                    {renderBlocks(content)}
                </div>
            </div>
        </article>
    );
};

export default BlogPostView;
