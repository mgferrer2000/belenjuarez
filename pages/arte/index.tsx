import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Arte: React.FC = () => {
    const location = useLocation();
    const links = [
        { name: 'Cuadros', path: '/arte/cuadros' },
        { name: 'Ilustración de Libros', path: '/arte/ilustracion' },
        { name: 'Crítica Artística', path: '/arte/critica' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink mb-6">Arte: La Geometría del Verso</h1>
                    <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:flex lg:flex-wrap lg:gap-4 lg:overflow-visible lg:border-x-0 lg:border-t-0 lg:border-b-gray-200 lg:bg-transparent lg:pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex min-h-[42px] items-center bg-paper px-3 py-2 text-[10px] uppercase leading-snug tracking-[0.04em] transition-colors hover:text-deep-red lg:inline lg:min-h-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-sm lg:tracking-widest lg:whitespace-nowrap ${location.pathname === link.path ? 'bg-deep-red text-paper font-bold hover:text-paper lg:bg-transparent lg:text-deep-red lg:border-b-2 lg:border-deep-red lg:hover:text-deep-red' : 'text-ink/60'
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
