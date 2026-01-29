import React, { useState } from 'react';
import { ART_CRITIQUES } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Newspaper, X } from 'lucide-react';

const Critica: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const article = ART_CRITIQUES[0];

    if (!article) return null;

    return (
        <div className="pb-24 max-w-5xl mx-auto px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white shadow-2xl overflow-hidden rounded-sm border border-ink/5"
            >
                {/* Header/Hero Section */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                    <img
                        src={article.coverUrl}
                        alt="Portada Revista Campus"
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-gold/80 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold">Crítica de Arte Histórica</span>
                            <span className="h-[1px] w-12 bg-white/30 hidden md:block"></span>
                            <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
                                <Calendar size={14} />
                                {article.date}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif italic mb-2 tracking-tight">"{article.title}"</h1>
                        <p className="text-lg md:text-xl text-white/80 font-serif italic pb-2 border-b border-gold/30 inline-block">Por {article.author}</p>
                    </div>
                </div>

                {/* Article Metadata Bar */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 px-8 md:px-12 py-6 bg-cream/10 border-b border-ink/5 text-ink/60 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <Newspaper size={16} className="text-gold" />
                        <span>{article.publication}</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div>{article.extraInfo}</div>
                </div>

                {/* Article Content Grid */}
                <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                    <div className="lg:col-span-2 space-y-8">
                        {article.content.split('\n\n').map((paragraph, idx) => (
                            <p
                                key={idx}
                                className={`text-ink/80 font-serif text-lg leading-relaxed text-justify ${idx === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:mr-4 first-letter:float-left first-letter:text-gold/80 first-letter:leading-none' : ''}`}
                            >
                                {paragraph}
                                {idx === 0 && <div className="clear-both"></div>}
                            </p>
                        ))}
                    </div>

                    {/* Side Gallery */}
                    <div className="space-y-8">
                        <div className="sticky top-24 space-y-8">
                            <div className="space-y-2">
                                <h4 className="font-serif italic text-2xl text-ink">El Reportaje</h4>
                                <div className="h-[1px] w-12 bg-gold/50"></div>
                                <p className="text-ink/40 font-sans text-[10px] uppercase tracking-widest">Haz clic para ampliar</p>
                            </div>

                            {article.images?.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                                    className="relative group cursor-zoom-in"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="p-2 bg-white shadow-md border border-ink/5">
                                        <img
                                            src={img}
                                            alt={`Ilustración ${idx + 1}`}
                                            className="w-full h-auto filter sepia-[0.2] group-hover:sepia-0 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-all duration-500"></div>
                                    <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/10 transition-all duration-500 m-4"></div>
                                </motion.div>
                            ))}

                            <div className="bg-paper p-6 border-l-2 border-gold/40">
                                <p className="text-ink/60 font-sans text-[11px] italic leading-relaxed">
                                    "La joven pintora cohesiona las deshilvanadas masas cromáticas gracias al negro, expresión de lo trágico..."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Lightbox for Article Images */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={selectedImage}
                                alt="Ampliación de crítica"
                                className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Critica;
