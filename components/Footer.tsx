import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-paper py-8 border-t border-gold/5 flex justify-center text-center">
            <p className="text-[10px] md:text-xs font-sans text-ink/40 tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity duration-500 px-6">
                Diseño web y programación por{' '}
                <a
                    href="mailto:mgferrer2000@gmail.com"
                    className="hover:text-gold transition-colors duration-300"
                >
                    Miguel A. González
                </a>{' '}
                &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
