import React, { useLayoutEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Musica: React.FC = () => {
    const location = useLocation();
    const contentRef = useRef<HTMLDivElement>(null);
    const shouldFocusContent = (location.state as { scrollToSectionContent?: boolean } | null)?.scrollToSectionContent;
    const links = [
        { name: 'Música y Poesía', path: '/musica/poesia' },
        { name: 'Horizonte de Sucesos', path: '/musica/horizonte' },
    ];

    useLayoutEffect(() => {
        if (shouldFocusContent && window.matchMedia('(max-width: 1023px)').matches) {
            contentRef.current?.scrollIntoView({ block: 'start' });
        }
    }, [location.pathname, shouldFocusContent]);

    return (
        <div className="pt-24 min-h-screen bg-ink text-paper">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Música: La Sonoridad del Verso</h1>
                    <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 lg:flex lg:flex-wrap lg:gap-4 lg:overflow-visible lg:border-x-0 lg:border-t-0 lg:border-b-white/20 lg:bg-transparent lg:pb-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                state={{ scrollToSectionContent: true }}
                                className={`flex min-h-[42px] items-center bg-ink px-3 py-2 text-[10px] uppercase leading-snug tracking-[0.04em] transition-colors hover:text-gold-accent lg:inline lg:min-h-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-sm lg:tracking-widest lg:whitespace-nowrap ${location.pathname === link.path ? 'bg-gold-accent text-ink font-bold hover:text-ink lg:bg-transparent lg:text-gold-accent lg:border-b-2 lg:border-gold-accent lg:hover:text-gold-accent' : 'text-white/60'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div ref={contentRef} className="scroll-mt-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Musica;
