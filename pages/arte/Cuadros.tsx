import React, { useState } from 'react';
import { ART_PIECES } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Cuadros: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<'todos' | 'cuadros' | 'bocetos'>('todos');

    const filteredPieces = ART_PIECES.filter(piece =>
        filter === 'todos' || piece.category === filter
    );

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + filteredPieces.length) % filteredPieces.length);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % filteredPieces.length);
        }
    };

    const selectedPiece = selectedIndex !== null ? filteredPieces[selectedIndex] : null;

    return (
        <div className="pb-20">
            <div className="text-center mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-ink/60 font-sans max-w-2xl mx-auto italic mb-8"
                >
                    Dibujos, pinturas y bocetos. La línea como extensión del verso
                </motion.p>

                {/* Filter Controls */}
                <div className="flex justify-center gap-8 border-b border-ink/5 pb-4 max-w-md mx-auto">
                    {[
                        { id: 'todos', label: 'Todo el Arte' },
                        { id: 'cuadros', label: 'Cuadros/Pinturas' },
                        { id: 'bocetos', label: 'Bocetos a lápiz' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setFilter(item.id as any);
                                setSelectedIndex(null);
                            }}
                            className={`font-sans text-xs uppercase tracking-[0.2em] transition-all relative py-2 ${filter === item.id ? 'text-ink' : 'text-ink/40 hover:text-ink/60'
                                }`}
                        >
                            {item.label}
                            {filter === item.id && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/60"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Masonry Layout */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredPieces.map((piece, index) => (
                        <motion.div
                            key={piece.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid group cursor-none"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <div className="relative overflow-hidden bg-cream/30 border border-ink/5 rounded-sm transition-all duration-500 hover:shadow-xl hover:border-ink/10">
                                <img
                                    src={piece.imageUrl}
                                    alt={piece.title}
                                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                                />

                                {/* Premium Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="h-[1px] w-8 bg-gold/50"></span>
                                            <p className="font-sans text-[10px] tracking-[0.2em] text-gold/80">
                                                <span className="uppercase">{piece.medium}</span>
                                                {piece.mediumDetail && <span className="italic ml-1">{piece.mediumDetail}</span>}
                                                {piece.year ? ` • ${piece.year}` : ''}
                                            </p>
                                        </div>
                                        <h3 className="font-serif text-2xl text-white italic leading-tight">{piece.title}</h3>
                                        <div className="mt-4 flex items-center gap-2 text-white/50 text-xs text-left">
                                            <Maximize2 size={14} />
                                            <span>Ver detalle</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Advanced Lightbox Modal */}
            <AnimatePresence>
                {selectedPiece && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-ink/98 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[60]"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        {/* Navigation Buttons */}
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

                        {/* Content Container */}
                        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
                            <motion.div
                                key={selectedPiece.id}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative flex-1 flex items-center justify-center w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedPiece.imageUrl}
                                    alt={selectedPiece.title}
                                    className="max-w-full max-h-[70vh] md:max-h-[85vh] object-contain shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            {/* Info Panel for Desktop */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-ink text-white p-8 md:p-10 shadow-2xl md:w-96 space-y-6 text-center md:text-left border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="space-y-2">
                                    <p className="font-sans text-xs tracking-[0.3em] text-gold-accent font-bold">
                                        <span className="uppercase">{selectedPiece.medium}</span>
                                    </p>
                                    {selectedPiece.mediumDetail && (
                                        <p className="font-sans text-xs tracking-widest text-gold-accent font-medium italic">
                                            {selectedPiece.mediumDetail}
                                        </p>
                                    )}
                                    <h2 className="font-serif text-3xl md:text-4xl italic text-paper">{selectedPiece.title}</h2>
                                    {selectedPiece.year && (
                                        <p className="text-white/60 font-sans text-sm tracking-widest">{selectedPiece.year}</p>
                                    )}
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

export default Cuadros;

