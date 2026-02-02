import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SHORT_STORIES } from '../../constants';
import { ArrowLeft, Download, BookOpen, Clock, Calendar } from 'lucide-react';

const RelatoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const story = SHORT_STORIES.find(s => s.id === id);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        if (story) {
            const words = story.sections.reduce((acc, section) => acc + section.content.split(/\s+/).length, 0);
            const minutes = Math.ceil(words / 200); // 200 words per minute average
            setReadingTime(minutes);
        }
        window.scrollTo(0, 0);
    }, [story]);

    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-ink italic mb-4">Relato no encontrado</h2>
                    <Link to="/obra-literaria/relatos" className="text-gold hover:underline flex items-center gap-2">
                        <ArrowLeft size={20} /> Volver a relatos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-paper pb-24">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-50"
                style={{ scaleX }}
            />

            {/* Header / Hero */}
            <header className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={story.coverUrl}
                        alt={story.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <Link
                            to="/obra-literaria/relatos"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-xs mb-8"
                        >
                            <ArrowLeft size={16} /> Volver a relatos
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-serif italic">{story.title}</h1>
                        {story.subtitle && (
                            <p className="text-xl md:text-2xl font-serif text-white/80 italic">{story.subtitle}</p>
                        )}
                        <div className="flex flex-wrap justify-center gap-6 text-sm tracking-widest uppercase text-white/60 pt-8">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} /> {story.year}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} /> {readingTime} min de lectura
                            </span>
                            <span className="flex items-center gap-2">
                                <BookOpen size={16} /> {story.publicationInfo}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Sidebar: Metadata & Actions */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-12 order-2 lg:order-1">
                        <div className="bg-ink/5 p-8 rounded-sm space-y-8 border border-ink/10">
                            <div className="space-y-4">
                                <h4 className="text-sm font-sans tracking-widest uppercase text-gold">Sinopsis</h4>
                                <p className="text-ink/80 font-serif leading-relaxed italic">
                                    "{story.synopsis}"
                                </p>
                            </div>

                            {story.pdfUrl && (
                                <div className="pt-4">
                                    <a
                                        href={story.pdfUrl}
                                        className="inline-flex items-center justify-center gap-3 w-full py-4 bg-ink text-paper hover:bg-gold transition-colors duration-300 font-sans tracking-widest uppercase text-xs rounded-sm"
                                        download
                                    >
                                        <Download size={18} />
                                        Descargar Edición PDF
                                    </a>
                                    <p className="text-[10px] text-ink/40 text-center mt-2 uppercase tracking-tighter">
                                        Ideal para lectura offline e impresión
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:block border-l-2 border-gold/20 pl-6 space-y-4">
                            <p className="text-xs text-ink/40 uppercase tracking-widest font-sans">Belén Juárez</p>
                            <p className="text-sm text-ink/60 font-serif italic">
                                "La memoria no es lo que recordamos, sino lo que nos recuerda."
                            </p>
                        </div>
                    </aside>

                    {/* Main Content: The Story */}
                    <main className="lg:col-span-8 space-y-24 order-1 lg:order-2">
                        {story.sections.map((section, index) => (
                            <motion.section
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="space-y-12"
                            >
                                {section.title && (
                                    <div className="flex items-center gap-6">
                                        <span className="text-4xl font-serif text-gold/40 italic">{section.title}</span>
                                        <div className="flex-1 h-px bg-gold/20"></div>
                                    </div>
                                )}

                                {section.illustrationUrl && (
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
                                        <img
                                            src={section.illustrationUrl}
                                            alt={`Ilustración de la sección ${section.title || index + 1}`}
                                            className="w-full h-auto rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                                        />
                                        <div className="flex justify-center mt-4">
                                            <div className="w-12 h-[1px] bg-gold/30"></div>
                                        </div>
                                    </div>
                                )}

                                <div className="prose prose-xl prose-stone mx-auto">
                                    <div className="text-ink/90 font-serif leading-[1.8] text-lg md:text-xl text-justify whitespace-pre-wrap selection:bg-gold/20">
                                        {(() => {
                                            const formatText = (text: string) => {
                                                const processInnerMarkers = (innerStep: string, keyBase: string) => {
                                                    const parts = innerStep.split(/(\*[^*]+\*|_[^_]+_)/);
                                                    return parts.map((part, index) => {
                                                        if (part.startsWith('*') && part.endsWith('*')) {
                                                            return <em key={`${keyBase}-${index}`} className="italic text-ink/80 font-serif">{part.slice(1, -1)}</em>;
                                                        }
                                                        if (part.startsWith('_') && part.endsWith('_')) {
                                                            return <span key={`${keyBase}-${index}`} className="not-italic text-ink/90 font-serif inline-block">{part.slice(1, -1)}</span>;
                                                        }
                                                        return part;
                                                    });
                                                };

                                                const blocks = text.split(/(\*[^*]+\*|_[^_]+_)/s);
                                                const result: React.ReactNode[] = [];

                                                blocks.forEach((block, bIndex) => {
                                                    if (block.startsWith('*') && block.endsWith('*')) {
                                                        const lines = block.slice(1, -1).split('\n');
                                                        lines.forEach((line, lIndex) => {
                                                            result.push(<em key={`it-${bIndex}-${lIndex}`} className="italic text-ink/80 font-serif">{line}</em>);
                                                            if (lIndex < lines.length - 1) result.push('\n');
                                                        });
                                                    } else if (block.startsWith('_') && block.endsWith('_')) {
                                                        const lines = block.slice(1, -1).split('\n');
                                                        lines.forEach((line, lIndex) => {
                                                            result.push(<span key={`norm-${bIndex}-${lIndex}`} className="not-italic text-ink/90 font-serif inline-block">{line}</span>);
                                                            if (lIndex < lines.length - 1) result.push('\n');
                                                        });
                                                    } else {
                                                        const lines = block.split('\n');
                                                        lines.forEach((line, lIndex) => {
                                                            const isDialogue = /^\s*—/.test(line) && !/^\s*\\+—/.test(line);
                                                            const cleanLine = line.replace(/^\s*\\+/, '');

                                                            if (isDialogue) {
                                                                result.push(
                                                                    <span key={`diag-${bIndex}-${lIndex}`} className="italic text-ink/80 block pl-4 border-l-2 border-gold/20 my-2">
                                                                        {processInnerMarkers(cleanLine, `diag-inner-${bIndex}-${lIndex}`)}
                                                                    </span>
                                                                );
                                                            } else {
                                                                result.push(processInnerMarkers(cleanLine, `plain-inner-${bIndex}-${lIndex}`));
                                                            }
                                                            if (lIndex < lines.length - 1) result.push('\n');
                                                        });
                                                    }
                                                });
                                                return result;
                                            };


                                            if (index === 0) {
                                                const firstChar = section.content.charAt(0);
                                                const rest = section.content.slice(1);
                                                return (
                                                    <>
                                                        <span className="float-left text-7xl font-serif text-gold leading-[0.8] mr-3 mt-1 select-none">
                                                            {firstChar}
                                                        </span>
                                                        {formatText(rest)}
                                                    </>
                                                );
                                            }
                                            return formatText(section.content);
                                        })()}
                                    </div>
                                </div>
                            </motion.section>
                        ))}

                        {/* End of story footer */}
                        <footer className="pt-20 border-t border-ink/10 text-center space-y-8">
                            <div className="flex justify-center items-center gap-4">
                                <div className="w-12 h-px bg-gold/30"></div>
                                <span className="text-gold font-serif italic tracking-widest uppercase text-sm">Fin del relato</span>
                                <div className="w-12 h-px bg-gold/30"></div>
                            </div>
                            <Link
                                to="/obra-literaria/relatos"
                                className="inline-flex items-center gap-2 py-4 px-8 border border-ink/20 hover:border-gold hover:text-gold transition-all duration-300 font-sans tracking-widest uppercase text-xs"
                            >
                                <ArrowLeft size={16} /> Volver a la galería de relatos
                            </Link>
                        </footer>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default RelatoDetail;
