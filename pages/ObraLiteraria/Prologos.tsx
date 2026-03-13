import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenText } from 'lucide-react';
import { PROLOGUE_WORKS } from './prologosData';

const Prologos: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto pb-24">
            <header className="mb-16 border-b border-gold/10 pb-10">
                <div className="flex items-center gap-3 text-deep-red font-sans text-xs uppercase tracking-[0.3em] font-bold mb-6">
                    <BookOpenText size={16} />
                    <span>Archivo editorial</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink leading-tight mb-5">
                    Prólogos y capítulos de libro
                </h2>

                <div className="w-24 h-[1px] bg-deep-red/60 mb-8"></div>

                <div className="max-w-3xl space-y-5 text-ink/70 font-light leading-relaxed text-lg text-justify">
                    <p>
                        Este apartado reúne prólogos, estudios introductorios y capítulos de libro escritos por Belén Juárez.
                        La página principal presenta cada publicación como una pieza editorial independiente.
                    </p>
                    <p>
                        Cada ficha conduce a una lectura de detalle pensada para consulta reposada, manteniendo la sobriedad y el ritmo visual del resto de la obra literaria.
                    </p>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                {PROLOGUE_WORKS.map((work) => (
                    <article key={work.slug} className="group flex h-full flex-col">
                        <Link to={`/obra-literaria/prologos/${work.slug}`} className="block mb-8">
                            <div className="relative h-[32rem] md:h-[34rem] lg:h-[36rem] overflow-hidden rounded-sm border border-gold/10 bg-[#f6f1e8] shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                                <img
                                    src={work.coverUrl}
                                    alt={`Portada de ${work.title}`}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div>
                                        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-accent font-bold mb-3">
                                            Abrir lectura
                                        </p>
                                        <h3 className="text-2xl font-serif text-white italic leading-tight">
                                            {work.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="flex flex-1 flex-col space-y-4 px-1">
                            <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold">
                                {work.year || 'Archivo'}
                            </p>
                            <div className="min-h-[8.5rem] flex flex-col justify-start">
                                <Link to={`/obra-literaria/prologos/${work.slug}`}>
                                    <h3 className="text-3xl font-serif text-ink italic leading-tight group-hover:text-deep-red transition-colors">
                                        {work.title}
                                    </h3>
                                </Link>
                                <p className="text-sm font-sans uppercase tracking-[0.2em] text-ink/45 mt-2">
                                    {work.publication}
                                </p>
                                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-ink/35 mt-3">
                                    {work.typeLabel}
                                </p>
                            </div>
                            <p className="flex-1 text-ink/70 font-light leading-relaxed text-justify">
                                {work.description}
                            </p>
                            <div className="pt-3">
                                <Link
                                    to={`/obra-literaria/prologos/${work.slug}`}
                                    className="inline-flex items-center gap-2 text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors pb-1 border-b border-deep-red hover:border-ink"
                                >
                                    Seguir leyendo
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Prologos;

