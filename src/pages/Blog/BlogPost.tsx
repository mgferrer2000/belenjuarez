import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostContent, getPublishedPosts, BlogPost } from '../../services/notion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogPostView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [content, setContent] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            if (!id) return;

            try {
                // Fetch the list again to find the metadata for this post
                const posts = await getPublishedPosts();
                const currentPost = posts.find(p => p.id === id);
                if (currentPost) setPost(currentPost);

                // Fetch the actual Notion blocks
                const blocks = await getPostContent(id);
                setContent(blocks);
            } catch (error) {
                console.error("Error fetching post content:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id]);

    // A very basic block renderer. In production you probably want a library like `react-notion-x` or mapping each block type
    const renderBlock = (block: any) => {
        const type = block.type;
        const value = block[type];

        if (!value || !value.rich_text) return null;

        const text = value.rich_text.map((t: any) => t.plain_text).join('');

        if (!text && type === 'paragraph') return <br key={block.id} />;

        switch (type) {
            case 'heading_1':
                return <h1 key={block.id} className="text-4xl font-serif text-ink mt-12 mb-6">{text}</h1>;
            case 'heading_2':
                return <h2 key={block.id} className="text-3xl font-serif text-ink mt-10 mb-4">{text}</h2>;
            case 'heading_3':
                return <h3 key={block.id} className="text-2xl font-serif text-ink mt-8 mb-4">{text}</h3>;
            case 'paragraph':
                return <p key={block.id} className="mb-6 text-ink/80 leading-relaxed font-serif text-lg">{text}</p>;
            case 'bulleted_list_item':
                return <li key={block.id} className="ml-4 list-disc text-ink/80 mb-2 font-serif">{text}</li>;
            case 'numbered_list_item':
                return <li key={block.id} className="ml-4 list-decimal text-ink/80 mb-2 font-serif">{text}</li>;
            case 'quote':
                return <blockquote key={block.id} className="pl-6 border-l-4 border-deep-red text-ink/70 italic font-serif my-8 text-xl">{text}</blockquote>;
            default:
                // Render raw markdown if plain paragraph or unknown type is detected as simple string
                return <p key={block.id} className="mb-6 text-ink/80">{text}</p>;
        }
    };

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
            {/* Header Container */}
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

            {/* Hero Image if exists */}
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

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="prose prose-invert prose-lg max-w-none">
                    {content.map(renderBlock)}
                </div>
            </div>
        </article>
    );
};

export default BlogPostView;
