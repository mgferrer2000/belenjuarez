import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { getPrologueWorkBySlug } from './prologosData';

const PrologoDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const work = slug ? getPrologueWorkBySlug(slug) : undefined;

    if (!work) {
        return <Navigate to="/obra-literaria/prologos" replace />;
    }

    return (
        <div className="max-w-6xl mx-auto pb-24">
            <div className="mb-10">
                <Link
                    to="/obra-literaria/prologos"
                    className="inline-flex items-center gap-2 text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors mb-8 group"
                >
                    <ArrowLeft size={14} />
                    Volver a prologos
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
                        <BookOpenText size={16} />
                        <span>{work.typeLabel}</span>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight mb-4">
                            {work.title}
                        </h1>
                        <p className="text-sm font-sans uppercase tracking-[0.2em] text-ink/45 mb-6">
                            {work.publication}{work.year ? ` · ${work.year}` : ''}
                        </p>
                        <div className="w-24 h-[1px] bg-deep-red/60"></div>
                    </div>

                    <div className="space-y-4 text-ink/70 font-light leading-relaxed text-lg text-justify max-w-3xl">
                        <p>{work.description}</p>
                        <p className="font-sans text-base text-ink/60">{work.authorsLine}</p>
                    </div>
                </div>
            </header>

            <section className="max-w-4xl space-y-6">
                {work.content.map((paragraph, index) => {
                    const isHeading =
                        paragraph === paragraph.toUpperCase() ||
                        /^\d+[\.:]?/.test(paragraph) ||
                        /^[A-ZÁÉÍÓÚÑÜ]\./.test(paragraph);

                    if (isHeading) {
                        return (
                            <h2
                                key={index}
                                className="pt-6 text-2xl md:text-3xl font-serif text-ink italic leading-tight"
                            >
                                {paragraph}
                            </h2>
                        );
                    }

                    return (
                        <p key={index} className="text-ink/75 font-light leading-relaxed text-lg text-justify">
                            {paragraph}
                        </p>
                    );
                })}
            </section>
        </div>
    );
};

export default PrologoDetail;
