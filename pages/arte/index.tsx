import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Arte: React.FC = () => {
    const location = useLocation();
    const links = [
        { name: 'Cuadros', path: '/arte/cuadros' },
        { name: 'Crítica Artística', path: '/arte/critica' },
        { name: 'Ilustración de Libros', path: '/arte/ilustracion' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">Arte: La Geometría del Verso</h1>
                    <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest hover:text-deep-red transition-colors ${location.pathname === link.path ? 'text-deep-red font-bold border-b-2 border-deep-red' : 'text-ink/60'
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

export default Arte;
