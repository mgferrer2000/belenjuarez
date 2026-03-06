import React from 'react';
import { Link } from 'react-router-dom';
import { VISUAL_POETRY } from '../constants';
import { motion } from 'framer-motion';

const PoesiaVisual: React.FC = () => {
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

                {/* Galleries Gallery (Covers Only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {VISUAL_POETRY.map((magazine, idx) => (
                        <motion.div
                            key={magazine.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link to={`/poesia-visual/${magazine.id}`} className="group block space-y-4">
                                <div className="aspect-[3/4] relative overflow-hidden bg-gray-50 flex items-center justify-center p-6 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                                    <img
                                        src={magazine.coverImage}
                                        alt={magazine.title}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gold-accent/0 group-hover:bg-gold-accent/5 transition-colors duration-300"></div>
                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="text-xl font-serif text-ink italic group-hover:text-deep-red transition-colors">{magazine.title}</h3>
                                    {magazine.description && (
                                        <p className="text-ink/60 font-sans tracking-widest uppercase text-[10px] font-bold">
                                            {magazine.description}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PoesiaVisual;
