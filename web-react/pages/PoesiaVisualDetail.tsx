import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VISUAL_POETRY } from '../constants';
import { ArrowLeft, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { localizeVisualPoetry, VISUAL_POETRY_UI } from '../i18n/visualPoetryMessages';

const PoesiaVisualDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { locale, path } = useI18n();
    const originalCollection = VISUAL_POETRY.find(p => p.id === id);
    const collection = originalCollection ? localizeVisualPoetry(originalCollection, locale) : undefined;
    const ui = VISUAL_POETRY_UI[locale];
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!collection) {
        return (
            <div className="pt-32 min-h-screen bg-paper flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-serif text-ink italic">{ui.notFound}</h2>
                    <Link to={path('/poesia-visual')} className="text-deep-red hover:text-gold-accent transition-colors flex items-center justify-center gap-2">
                        <ArrowLeft size={16} /> {ui.back}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-paper text-ink">
            <div className="max-w-7xl mx-auto px-6 space-y-16">

                {/* Header Nav */}
                <div className="mb-12">
                    <Link to={path('/poesia-visual')} className="inline-flex items-center text-ink/60 hover:text-deep-red transition-colors mb-8 group tracking-widest text-sm uppercase">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} /> {ui.back}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">{collection.title}</h1>
                        {collection.description && (
                            <p className="text-xl text-ink/60 italic font-serif border-l-2 border-gold-accent pl-4">
                                {collection.description}
                            </p>
                        )}
                    </motion.div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                {/* Artworks Gallery */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${collection.artworkImages.length > 2 ? 'lg:grid-cols-3' : ''} gap-8 max-w-5xl mx-auto`}>
                        {collection.artworkImages.map((img, imgIdx) => (
                            <div
                                key={imgIdx}
                                className="group cursor-pointer aspect-[3/4] relative overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage({ url: img, title: `${collection.title} - ${ui.artwork(imgIdx + 1)}` })}
                            >
                                <img
                                    src={img}
                                    alt={`${collection.title} - ${ui.artwork(imgIdx + 1)}`}
                                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300 flex items-center justify-center">
                                    <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Optional Poema/Text box */}
                {collection.poemText && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto mt-20 p-8 md:p-12 bg-gray-50 border border-gray-100 relative shadow-sm"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gold-accent"></div>
                        <pre className="font-serif text-lg md:text-xl leading-relaxed text-ink/80 whitespace-pre-wrap font-normal italic">
                            {collection.poemText}
                        </pre>
                    </motion.div>
                )}

            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="max-w-full max-h-full object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PoesiaVisualDetail;
