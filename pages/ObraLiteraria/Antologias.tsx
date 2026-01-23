import React from 'react';
import { COLLABORATIONS } from '../../constants';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Antologias: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif text-ink mb-12 flex items-center gap-3 border-b border-gray-200 pb-4">
                <BookOpen size={24} className="text-deep-red" />
                Poemas en antologías y revistas
            </h3>

            <div className="space-y-12">
                {COLLABORATIONS.map((collab) => (
                    <article key={collab.id} className="flex flex-col md:flex-row gap-8 items-start fade-in">
                        {/* Image Column */}
                        <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
                            <Link to={`/obra-literaria/antologias/${collab.id}`} className="block group">
                                <div className="aspect-video overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                                    <img
                                        src={collab.coverUrl}
                                        alt={collab.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        style={{ objectPosition: collab.imagePosition || 'center' }}
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 text-sm mb-2">
                                <span className="font-bold text-deep-red uppercase tracking-wider text-xs">
                                    {collab.date}
                                </span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span className="text-gray-500 uppercase tracking-wider text-xs">
                                    {collab.type}
                                </span>
                            </div>

                            <Link to={`/obra-literaria/antologias/${collab.id}`} className="group block mb-3">
                                <h2 className="text-2xl font-serif text-ink group-hover:text-deep-red transition-colors mb-1">
                                    {collab.title}
                                </h2>
                                <h3 className="text-lg text-gray-600 font-serif italic">
                                    En: {collab.publication}
                                </h3>
                            </Link>

                            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                {collab.description}
                            </p>

                            <Link
                                to={`/obra-literaria/antologias/${collab.id}`}
                                className="inline-flex items-center text-deep-red uppercase tracking-widest text-xs font-bold hover:text-ink transition-colors group"
                            >
                                Leer más
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Antologias;
