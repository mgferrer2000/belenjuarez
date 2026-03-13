import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Download, Languages } from 'lucide-react';
import { getTranslationWorkBySlug } from './traduccionData';

const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
        }

        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={index} className="italic">{part.slice(1, -1)}</em>;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

const renderPoem = (text: string) => {
    return text.split('\n').map((line, index) => {
        if (line.trim() === '') {
            return <div key={index} className="h-7" />;
        }

        return (
            <div key={index} className="whitespace-pre font-serif text-lg leading-[1.9] text-ink/80 font-normal min-w-max">
                {renderInlineFormatting(line)}
            </div>
        );
    });
};

const TraduccionDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const work = slug ? getTranslationWorkBySlug(slug) : undefined;

    if (!work) {
        return <Navigate to="/obra-literaria/traduccion" replace />;
    }

    return (
        <div className="max-w-6xl mx-auto pb-24">
            <div className="mb-10">
                <Link
                    to="/obra-literaria/traduccion"
                    className="inline-flex items-center gap-2 text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors mb-8 group"
                >
                    <ArrowLeft size={14} />
                    Volver a traduccion
                </Link>
            </div>

            <header className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start mb-16 border-b border-gold/10 pb-12">
                <div>
                    <div className="overflow-hidden rounded-sm border border-gold/10 bg-white shadow-xl">
                        <img src={work.coverUrl} alt={`Portada de ${work.title}`} className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-deep-red font-sans text-xs uppercase tracking-[0.3em] font-bold">
                        <Languages size={16} />
                        <span>Edicion bilingue</span>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight mb-4">
                            {work.title}
                        </h1>
                        <p className="text-sm font-sans uppercase tracking-[0.2em] text-ink/45 mb-6">
                            {work.publication} · {work.year}
                        </p>
                        <div className="w-24 h-[1px] bg-deep-red/60"></div>
                    </div>

                    <div className="space-y-4 text-ink/70 font-light leading-relaxed text-lg text-justify max-w-3xl">
                        <p>{work.description}</p>
                        <p className="font-sans text-base text-ink/60">{work.authorsLine}</p>
                        <p className="font-sans text-base text-ink/60">{work.roleLine}</p>
                        {work.note && <p>{work.note}</p>}
                    </div>

                    <div className="pt-4">
                        <a
                            href={work.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-3 bg-ink text-paper font-sans text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-deep-red transition-colors shadow-lg"
                        >
                            <Download size={14} />
                            Descargar PDF
                        </a>
                    </div>
                </div>
            </header>

            <section className="space-y-14">
                {work.sections.map((section) => (
                    <article key={section.id} className="border border-gold/10 bg-white/70 rounded-sm shadow-sm overflow-hidden">
                        <div className="px-8 md:px-10 py-8 border-b border-ink/5 bg-paper/70">
                            {section.title && !/^Poema\s+[IVXLCDM]+$/i.test(section.title) && (
                                <h2 className="text-2xl md:text-3xl font-serif text-ink italic mb-3">
                                    {section.title}
                                </h2>
                            )}
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div className="p-8 md:p-10 xl:border-r border-ink/5 overflow-x-auto">
                                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold mb-6">
                                    {section.sourceLanguage}
                                </p>
                                <div>{renderPoem(section.sourceText)}</div>
                            </div>

                            <div className="p-8 md:p-10 bg-paper/40 overflow-x-auto">
                                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold mb-6">
                                    {section.targetLanguage}
                                </p>
                                <div>{renderPoem(section.targetText)}</div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {work.supplementaryNotes && work.supplementaryNotes.length > 0 && (
                <section className="mt-16 border-t border-gold/10 pt-12 max-w-4xl">
                    <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold mb-6">
                        Notas
                    </p>
                    <div className="space-y-4 text-ink/70 font-light leading-relaxed text-base text-justify">
                        {work.supplementaryNotes.map((note, index) => (
                            <p key={index}>{renderInlineFormatting(note)}</p>
                        ))}
                    </div>
                </section>
            )}

            {work.analysis && (
                <section className="mt-16 border-t border-gold/10 pt-12 max-w-4xl">
                    <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold mb-6">
                        Lectura critica
                    </p>
                    <div className="space-y-6 text-ink/75 font-light leading-relaxed text-lg text-justify">
                        {work.analysis.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{renderInlineFormatting(paragraph)}</p>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default TraduccionDetail;


