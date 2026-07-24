import React, { useState } from 'react';
import { ILLUSTRATED_BOOKS } from '../../constants';
import { IllustratedBook } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';
import { ART_UI, localizeIllustratedBook } from '../../i18n/artMessages';

const Ilustracion: React.FC = () => {
    const { locale } = useI18n();
    const ui = ART_UI[locale];
    const [selectedBook, setSelectedBook] = useState<IllustratedBook | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedBook) {
            setSelectedIndex((selectedIndex - 1 + selectedBook.illustrations.length) % selectedBook.illustrations.length);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedBook) {
            setSelectedIndex((selectedIndex + 1) % selectedBook.illustrations.length);
        }
    };

    const localizedSelectedBook = selectedBook ? localizeIllustratedBook(selectedBook, locale) : null;
    const selectedPiece = (localizedSelectedBook && selectedIndex !== null) ? localizedSelectedBook.illustrations[selectedIndex] : null;

    return (
        <div className="pb-20">
            <div className="text-center mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-ink/60 font-sans max-w-2xl mx-auto italic mb-8"
                >
                    {localizedSelectedBook
                        ? (localizedSelectedBook.description || ui.illustrationsFor(localizedSelectedBook.title))
                        : ui.illustrationsIntro
                    }
                </motion.p>

                {localizedSelectedBook?.id === 'noches-azules' && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto mb-10 border border-gold/10 bg-white/70 px-8 py-10 md:px-12 md:py-12 shadow-sm text-left"
                    >
                        <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
                            {ui.review.pretitle}
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl italic text-ink mb-3">
                            {ui.review.title}
                        </h2>
                        <p className="text-ink/45 font-sans text-xs uppercase tracking-[0.22em] mb-8">
                            {ui.review.author}
                        </p>
                        <div className="space-y-5 text-ink/75 font-light leading-relaxed text-base md:text-lg text-justify">
                            {ui.review.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                )}

                {localizedSelectedBook && (
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => {
                            setSelectedBook(null);
                            setSelectedIndex(null);
                        }}
                        className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors mx-auto font-sans text-xs uppercase tracking-[0.2em]"
                    >
                        <ArrowLeft size={16} />
                        {ui.backToBooks}
                    </motion.button>
                )}
            </div>

            <AnimatePresence mode="wait">
                {!selectedBook ? (
                    <motion.div
                        key="book-list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
                    >
                        {ILLUSTRATED_BOOKS.map((book) => (
                            <motion.div
                                key={book.id}
                                whileHover={{ y: -10 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedBook(book)}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream/30 border border-ink/5 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={book.coverUrl}
                                        alt={book.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                                        <h3 className="text-white font-serif text-3xl italic mb-4">{book.title}</h3>
                                        <div className="h-[1px] w-12 bg-gold/50 mb-4"></div>
                                        <p className="text-white/70 font-sans text-xs uppercase tracking-[0.2em]">{ui.viewIllustrations}</p>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <h3 className="font-serif text-2xl text-ink italic">{book.title}</h3>
                                    {book.year && <p className="text-ink/40 font-sans text-sm mt-1">{book.year}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="illustration-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {localizedSelectedBook?.illustrations.map((piece, index) => (
                            <motion.div
                                key={piece.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group cursor-none"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className="relative overflow-hidden bg-cream/30 border border-ink/5 rounded-sm transition-all duration-500 hover:shadow-xl hover:border-ink/10">
                                    <img
                                        src={piece.imageUrl}
                                        alt={piece.title}
                                        className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="h-[1px] w-8 bg-gold/50"></span>
                                                <p className="font-sans text-[10px] tracking-[0.2em] text-gold/80">
                                                    <span className="uppercase">{piece.medium}</span>
                                                    {piece.mediumDetail && <span className="italic ml-1">{piece.mediumDetail}</span>}
                                                </p>
                                            </div>
                                            <h3 className="font-serif text-2xl text-white italic leading-tight">{piece.title}</h3>
                                            <div className="mt-4 flex items-center gap-2 text-white/50 text-xs">
                                                <Maximize2 size={14} />
                                                <span>{ui.viewDetail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedPiece && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-ink/98 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[60]"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 hover:bg-white/5 rounded-full z-[60]"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 hover:bg-white/5 rounded-full z-[60]"
                            onClick={handleNext}
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>

                        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
                            <motion.div
                                key={selectedPiece.id}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="relative flex-1 flex items-center justify-center w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedPiece.imageUrl}
                                    alt={selectedPiece.title}
                                    className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-ink text-white p-8 md:p-10 shadow-2xl md:w-96 space-y-6 text-center md:text-left border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="space-y-2">
                                    <h2 className="font-serif text-3xl md:text-4xl italic text-paper">{selectedPiece.title}</h2>
                                </div>
                                <div className="h-[1px] w-16 bg-gold-accent/50 mx-auto md:mx-0"></div>
                                {selectedPiece.description && (
                                    <p className="text-white/80 font-sans text-sm leading-relaxed">
                                        {selectedPiece.description}
                                    </p>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Ilustracion;



