import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BOOK_REVIEWS } from '../../constants';
import { ArrowLeft, Share2, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

const ResenaDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const review = BOOK_REVIEWS.find(r => r.id === id);

    if (!review) {
        return <Navigate to="/obra-literaria/resenas-libros" replace />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-24 pb-32 bg-paper min-h-screen"
        >
            <div className="max-w-5xl mx-auto px-6">
                {/* Back Button */}
                <Link
                    to="/obra-literaria/resenas-libros"
                    className="inline-flex items-center gap-2 text-ink/40 hover:text-deep-red transition-colors text-xs uppercase tracking-widest mb-12"
                >
                    <ArrowLeft size={14} /> Volver a reseñas
                </Link>

                {/* Header Section */}
                <header className="mb-16 text-center space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-gold-accent font-sans text-xs uppercase tracking-[0.4em] font-bold">Crítica Literaria</h4>
                        <h1 className="text-5xl md:text-6xl font-serif text-ink italic leading-tight max-w-4xl mx-auto">
                            {review.title}
                        </h1>
                        <div className="w-24 h-px bg-gold-accent/30 mx-auto" />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-sans text-ink/60 uppercase tracking-widest">
                        <span>{review.author}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{review.publication}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{review.date}</span>
                    </div>
                </header>

                {/* Newspaper Layout Content */}
                <div className="bg-white/40 border border-gray-100 p-8 md:p-16 shadow-sm relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-accent/40" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-accent/40" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-accent/40" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-accent/40" />

                    <div className="md:columns-2 gap-12 text-ink/80 font-serif leading-loose text-lg text-justify space-y-6">
                        {/* Drop cap first paragraph */}
                        <div className="contents">
                            {review.fullContent.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className={`${idx === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-gold-accent first-letter:leading-[0.8]' : ''} mb-6`}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer / Actions */}
                <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-ink/40">
                    <div className="flex gap-6">
                        <button className="hover:text-ink transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest">
                            <Share2 size={14} /> Compartir
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="hover:text-ink transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest"
                        >
                            <Printer size={14} /> Imprimir
                        </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em]">© {review.date} {review.author}</p>
                </footer>
            </div>
        </motion.div>
    );
};

export default ResenaDetail;
