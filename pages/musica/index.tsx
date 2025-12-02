import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Musica: React.FC = () => {
    const location = useLocation();
    const links = [
        { name: 'Música y Poesía', path: '/musica/poesia' },
        { name: 'Horizonte de Sucesos', path: '/musica/horizonte' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-ink text-paper">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Música: La Sonoridad del Verso</h1>
                    <div className="flex flex-wrap gap-4 border-b border-white/20 pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest hover:text-gold-accent transition-colors ${location.pathname === link.path ? 'text-gold-accent font-bold border-b-2 border-gold-accent' : 'text-white/60'
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

export default Musica;
