import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const ObraLiteraria: React.FC = () => {
    const location = useLocation();
    const links = [
        { name: 'Libros', path: '/obra-literaria/libros' },
        { name: 'Reseñas sobre libros', path: '/obra-literaria/resenas-libros' },
        { name: 'Poemas en antologías y revistas', path: '/obra-literaria/antologias' },
        { name: 'Plaquettes', path: '/obra-literaria/plaquettes' },
        { name: 'Relatos', path: '/obra-literaria/relatos' },
        { name: 'Crítica literaria', path: '/obra-literaria/critica' },
        { name: 'Crítica libros legado andalusí', path: '/obra-literaria/critica-andalusi' },
        { name: 'Prólogos y capítulos de libro', path: '/obra-literaria/prologos' },
        { name: 'Traducción', path: '/obra-literaria/traduccion' },
        { name: 'Entrevistas a escritores', path: '/obra-literaria/entrevistas' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">Obra Literaria</h1>
                    <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest hover:text-deep-red transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-deep-red font-bold border-b-2 border-deep-red' : 'text-ink/60'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default ObraLiteraria;
