import React from 'react';
import { PLAQUETTES } from '../../constants';
import { Bookmark, Calendar, MapPin, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Plaquettes: React.FC = () => {
    const plaquette = PLAQUETTES[0]; // Currently only one

    if (!plaquette) {
        return (
            <div className="py-24 text-center">
                <h3 className="text-xl font-serif text-ink/60 italic">Sección en actualización</h3>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto pb-32">
            {/* Immersive Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 px-4 md:px-0"
            >
                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16">
                    {/* Larger, identifiable cover */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-48 md:w-64 flex-shrink-0 shadow-2xl rounded-sm overflow-hidden border-4 border-white bg-white transform transition-transform duration-500"
                    >
                        <img
                            src={plaquette.coverUrl}
                            alt={`Portada de ${plaquette.title}`}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-red/5 text-deep-red text-[10px] uppercase tracking-[0.2em] font-bold">
                            <Bookmark size={12} /> Colección Plaquettes
                        </div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-ink italic leading-tight">
                            {plaquette.title}
                        </h1>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-sans text-ink/60 uppercase tracking-widest border-t border-gray-100 pt-8 mt-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-gold-accent" />
                                <span>{plaquette.date}</span>
                            </div>
                            {plaquette.event && (
                                <div className="hidden md:block w-px h-4 bg-gray-200 self-center" />
                            )}
                            <div className="flex items-center gap-2 text-gold-accent">
                                <span>{plaquette.event}</span>
                            </div>
                            <div className="w-full md:hidden" />
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-gold-accent" />
                                <span>{plaquette.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Column: Illustration & Credits (Sticky) */}
                <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-24 space-y-8">
                    {plaquette.illustrationUrl && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-white group cursor-crosshair"
                        >
                            <img
                                src={plaquette.illustrationUrl}
                                alt="Ilustración principal de la obra"
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                            />
                            <div className="p-4 bg-white border-t border-gray-50 text-center">
                                <p className="text-[10px] font-sans text-ink/40 uppercase tracking-[0.2em]">
                                    Ilustración por Belén Juárez
                                </p>
                            </div>
                        </motion.div>
                    )}

                    <div className="bg-paper/50 p-6 border-l-2 border-gold-accent italic space-y-2">
                        <p className="text-ink/80 font-serif text-sm leading-relaxed">
                            {plaquette.publication}
                        </p>
                        <p className="text-[10px] font-sans text-gold-accent uppercase tracking-widest font-bold">
                            {plaquette.credits}
                        </p>
                    </div>
                </div>

                {/* Right Column: Poem Sections */}
                <div className="lg:col-span-12 xl:col-span-7 space-y-24">
                    {plaquette.sections.map((section, idx) => (
                        <motion.section
                            key={section.number}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="relative pl-12 md:pl-0"
                        >
                            {/* Section Numbering */}
                            <div className="absolute -left-4 md:-left-16 top-0 flex flex-col items-center">
                                <span className="text-4xl md:text-6xl font-serif text-gold-accent/20 select-none">
                                    {section.number.toString().padStart(2, '0')}
                                </span>
                                <div className="w-px h-12 bg-gold-accent/20 mt-2" />
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-2xl md:text-3xl font-serif text-ink italic leading-tight max-w-2xl">
                                    {section.title}
                                </h3>

                                <div className="prose prose-slate max-w-none">
                                    <pre className="font-serif text-lg md:text-xl leading-relaxed text-ink/90 bg-transparent border-none p-0 whitespace-pre-wrap italic">
                                        {section.content}
                                    </pre>
                                </div>

                                {idx < plaquette.sections.length - 1 && (
                                    <div className="pt-12 flex justify-start">
                                        <div className="w-12 h-px bg-gray-200" />
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    ))}

                    {/* Closing Element */}
                    <div className="pt-12 text-center text-ink/30 italic font-serif">
                        <Quote size={24} className="mx-auto mb-4 text-gold-accent/40" />
                        <p>Fin de la Plaquette</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Plaquettes;
