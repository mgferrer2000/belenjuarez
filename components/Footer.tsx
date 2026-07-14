import React from 'react';
import { useI18n } from '../i18n/I18nProvider';

const Footer: React.FC = () => {
    const { messages } = useI18n();

    return (
        <footer className="w-full bg-paper py-8 border-t border-gold/5 flex justify-center text-center">
            <p className="text-[10px] md:text-xs font-sans text-ink/40 tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity duration-500 px-6">
                {messages.footerCredit}{' '}
                <a
                    href="mailto:mgferrer2000@gmail.com"
                    className="hover:text-gold transition-colors duration-300"
                >
                    Miguel A. González Ferrer
                </a>{' '}
                &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
