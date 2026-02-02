import React from 'react';
import { Link } from 'react-router-dom';
import { BOOK_REVIEWS } from '../../constants';
import { motion } from 'framer-motion';
import { Quote, BookOpen } from 'lucide-react';

const ResenasLibros: React.FC = () => {
    return (
        <div className="py-12 space-y-24">
            {BOOK_REVIEWS.map((review, idx) => (
                <div key={review.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Cover Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 lg:w-1/4"
                    >
                        <div className="relative group perspective-1000">
                            <img
                                src={review.coverUrl}
                                alt={`Portada de ${review.publication}`}
                                className="w-full shadow-2xl rounded-sm transition-transform duration-500 group-hover:rotate-y-12"
                            />
                            <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Content Preview */}
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <h4 className="text-gold-accent font-sans text-xs uppercase tracking-[0.3em] font-bold">Reseña de {review.bookTitle}</h4>
                            <h2 className="text-3xl md:text-4xl font-serif text-ink italic leading-tight">
                                "{review.title}"
                            </h2>
                            <p className="text-sm font-sans text-ink/60 uppercase tracking-widest">
                                {review.author}
                            </p>
                        </div>

                        <div className="relative pl-10 pr-6">
                            <Quote className="absolute top-0 left-0 text-gold-accent/40 w-8 h-8 -translate-x-2 -translate-y-2" />
                            <p className="text-xl md:text-2xl font-serif text-ink/80 leading-relaxed italic">
                                {review.condensedQuote}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                to={`/obra-literaria/resenas-libros/${review.id}`}
                                className="inline-flex items-center gap-3 px-8 py-3 bg-ink text-paper font-sans text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-deep-red transition-colors shadow-lg"
                            >
                                <BookOpen size={14} /> Seguir leyendo
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResenasLibros;
