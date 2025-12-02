import React, { useState } from 'react';
import { ART_PIECES } from '../../constants';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Cuadros: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div>
            <div className="text-center mb-16">
                <p className="text-ink/60 font-sans max-w-2xl mx-auto">
                    Dibujos, pinturas y bocetos. La línea como extensión del verso.
                </p>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {ART_PIECES.map((piece) => (
                    <motion.div
                        key={piece.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="break-inside-avoid group cursor-pointer"
                        onClick={() => setSelectedImage(piece.imageUrl)}
                    >
                        <div className="relative overflow-hidden bg-gray-100 mb-6">
                            <img
                                src={piece.imageUrl}
                                alt={piece.title}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                <h3 className="font-serif text-xl italic mb-2">{piece.title}</h3>
                                <p className="font-sans text-xs uppercase tracking-widest text-gray-300">{piece.medium}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 text-white hover:text-deep-red transition-colors">
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Art detail"
                        className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Cuadros;
