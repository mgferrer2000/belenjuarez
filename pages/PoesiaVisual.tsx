import React, { useState } from 'react';
import { VISUAL_POETRY } from '../constants';
import { Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PoesiaVisual: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-paper text-ink">
            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* Header & Introductory Text */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-12">Poesía Visual</h1>

                    <div className="prose prose-lg prose-slate mx-auto text-ink/80 leading-relaxed font-light space-y-6">
                        <h2 className="text-2xl font-serif text-deep-red italic text-center mb-8">La Poesía visual no es grafismo</h2>
                        <p>
                            No es posible definir la Poesía visual sin carga de magia y asombro, sin conducir la razón humana hacia el mundo de las emociones. Pensemos en Poesía visual como un instrumento capaz de atraer a la Poesía hacia este lado de la realidad igual que utilizamos un piano, un violín o una guitarra para hacer música. Lo importante será la música, el medio será el instrumento que utilicemos. Igual sucede en Poesía.
                        </p>
                        <p>
                            La Poesía es la meta donde anida la pureza emocional. La imagen, el sonido o la palabra son los instrumentos. En torno a esta idea, personalmente siempre aposté por el arte de la pintura como instrumento de expresión de la Poesía, utilicé el pincel para expresar todo ese conjunto de ideas, pensamientos y vértices que llegaban a mi entendimiento. Los pinceles me han acompañado siempre en la creación de la imagen de la Poesía.
                        </p>
                        <p>
                            La Poesía visual no es grafismo. Captura la metamorfosis de la Poesía como un pincel clásico que al rozar el lienzo se transforma en cuerdas de luz, en versos vibrantes, en sinfonía de tintas, en palabra sobre el trazo.
                        </p>
                        <p>
                            Desde el pincel me brotan sombras, acrílicos, neones, geometrías, negaciones, letras grandes y pequeñas, rostros, notas musicales flotantes, movimiento, emoción.
                        </p>
                        <p className="font-serif italic text-xl text-center pt-4 text-ink">
                            La Poesía visual no es grafismo, es un manantial de donde nace la palabra venida desde la retina, como río de lava volcada sobre el papel.
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                {/* Galleries */}
                <div className="space-y-32">
                    {VISUAL_POETRY.map((magazine, idx) => (
                        <motion.section
                            key={magazine.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h3 className="text-3xl font-serif text-ink italic">{magazine.title}</h3>
                                {magazine.description && (
                                    <p className="text-ink/60 font-sans tracking-widest uppercase text-xs font-bold">
                                        {magazine.description}
                                    </p>
                                )}
                            </div>

                            <div className={`grid grid-cols-1 md:grid-cols-2 ${magazine.images.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 max-w-5xl mx-auto`}>
                                {magazine.images.map((img, imgIdx) => (
                                    <div
                                        key={imgIdx}
                                        className="group cursor-pointer aspect-[3/4] relative overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                        onClick={() => setSelectedImage({ url: img, title: magazine.title })}
                                    >
                                        <img
                                            src={img}
                                            alt={`${magazine.title} - Imagen ${imgIdx + 1}`}
                                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300 flex items-center justify-center">
                                            <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" size={32} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Optional Poema/Text box for Anfora */}
                            {magazine.poemText && (
                                <div className="max-w-2xl mx-auto mt-12 p-8 bg-gray-50 border-l-2 border-gold-accent">
                                    <pre className="font-serif text-lg leading-relaxed text-ink/80 whitespace-pre-wrap font-normal italic">
                                        {magazine.poemText}
                                    </pre>
                                </div>
                            )}

                        </motion.section>
                    ))}
                </div>
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

export default PoesiaVisual;
