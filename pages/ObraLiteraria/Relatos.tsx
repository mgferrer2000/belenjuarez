import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SHORT_STORIES } from '../../constants';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Relatos: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-ink italic mb-4">Relatos</h2>
                <div className="w-24 h-1 bg-gold/30 mx-auto mb-6"></div>
                <p className="text-ink/70 max-w-2xl mx-auto font-serif">
                    Narrativas breves que exploran la memoria, el exilio y la identidad a través de prosa poética e ilustraciones sugerentes.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {SHORT_STORIES.map((story, index) => (
                    <motion.div
                        key={story.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <Link to={story.id} className="block space-y-6">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <img
                                    src={story.coverUrl}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: story.coverPosition || '90% center' }}
                                />
                                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500"></div>
                                {story.sections.length === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-paper/20 backdrop-blur-[2px]">
                                        <div className="bg-paper/80 px-4 py-2 border border-gold/30 rounded-sm">
                                            <span className="text-ink/80 font-serif italic">Próximamente</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-xs tracking-widest text-gold uppercase font-sans">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {story.year}
                                    </span>
                                    {story.pdfUrl && (
                                        <span className="flex items-center gap-1">
                                            <BookOpen size={12} />
                                            Disponible PDF
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-serif text-ink italic group-hover:text-gold transition-colors duration-300">
                                    {story.title}
                                </h3>

                                <p className="text-ink/70 text-sm line-clamp-3 font-serif leading-relaxed">
                                    {story.synopsis}
                                </p>

                                <div className="pt-2 flex items-center gap-2 text-gold text-sm font-sans tracking-wider uppercase transition-colors duration-300 group-hover:text-gold/80">
                                    Leer relato <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Relatos;
