import React, { useEffect, useState } from 'react';
import { getPublishedPosts, BlogPost } from '../../services/notion';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>('Todas');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const publishedPosts = await getPublishedPosts();
                setPosts(publishedPosts);
            } catch (error) {
                console.error("Error fetching Notion posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const availableTags = ['Todas', ...Array.from(new Set(posts.flatMap(post => post.tags))).sort((a, b) => a.localeCompare(b, 'es'))];
    const filteredPosts = selectedTag === 'Todas'
        ? posts
        : posts.filter(post => post.tags.includes(selectedTag));

    return (
        <div className="pt-32 pb-24 min-h-screen bg-paper text-ink">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">Diario Abierto</h1>
                    <p className="text-xl text-gray-600 font-light max-w-2xl">
                        Últimas participaciones en recitales y encuentros poéticos: poemas y textos inéditos.
                    </p>
                </div>

                {!loading && availableTags.length > 1 && (
                    <div className="mb-12 flex flex-wrap gap-3">
                        {availableTags.map((tag) => {
                            const isActive = tag === selectedTag;

                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setSelectedTag(tag)}
                                    className={`border px-4 py-2 text-xs uppercase tracking-[0.24em] transition-colors ${
                                        isActive
                                            ? 'border-deep-red bg-deep-red text-paper'
                                            : 'border-ink/15 bg-white text-ink/70 hover:border-deep-red hover:text-deep-red'
                                    }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((skeleton) => (
                            <div key={skeleton} className="animate-pulse bg-ink/5 h-96 rounded-sm"></div>
                        ))}
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500 font-serif italic text-lg">
                        {posts.length === 0
                            ? 'Aún no se han publicado artículos. Vuelve pronto para leer nuevos textos.'
                            : 'No hay artículos publicados con esa etiqueta.'}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group border border-ink/10 rounded-sm overflow-hidden bg-white hover:border-deep-red transition-colors flex flex-col h-full"
                            >
                                <Link to={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden">
                                    {post.coverImage ? (
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-paper flex items-center justify-center border-b border-ink/10">
                                            <span className="font-serif text-4xl opacity-20 text-ink">BJ</span>
                                        </div>
                                    )}
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    {post.tags.length > 0 && (
                                        <div className="mb-5 flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <button
                                                    key={`${post.id}-${tag}`}
                                                    type="button"
                                                    onClick={() => setSelectedTag(tag)}
                                                    className="border border-deep-red/25 bg-deep-red/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-deep-red transition-colors hover:border-deep-red hover:bg-deep-red hover:text-paper"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-deep-red mb-4">
                                        <Calendar size={14} />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>

                                    <Link to={`/blog/${post.id}`}>
                                        <h2 className="text-2xl font-serif text-ink mb-4 group-hover:text-deep-red transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-deep-red transition-colors">
                                        <Link to={`/blog/${post.id}`} className="flex items-center gap-2 font-mono uppercase tracking-wider">
                                            Leer más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogList;
