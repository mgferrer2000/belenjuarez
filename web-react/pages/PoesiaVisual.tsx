import React from 'react';
import { Link } from 'react-router-dom';
import { VISUAL_POETRY } from '../constants';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { localizeVisualPoetry, VISUAL_POETRY_UI } from '../i18n/visualPoetryMessages';

const PoesiaVisual: React.FC = () => {
    const { locale, path } = useI18n();
    const ui = VISUAL_POETRY_UI[locale];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-paper text-ink">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

                    {/* Left Column: Text */}
                    <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col space-y-8 lg:sticky lg:top-32 h-max">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">{ui.title}</h1>

                        <div className="prose prose-lg prose-slate text-ink/80 leading-relaxed font-light space-y-6">
                            <h2 className="text-2xl font-serif text-deep-red italic mb-8">{ui.subtitle}</h2>
                            {ui.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            <p className="font-serif italic text-xl pt-4 text-ink">
                                {ui.closing}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Galleries (Covers) */}
                    <div className="w-full lg:w-7/12 xl:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
                            {VISUAL_POETRY.map((originalMagazine, idx) => {
                                const magazine = localizeVisualPoetry(originalMagazine, locale);
                                return (
                                <motion.div
                                    key={magazine.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Link to={path(`/poesia-visual/${magazine.id}`)} className="group block space-y-4 h-full">
                                        <div className="aspect-[3/4] relative overflow-hidden bg-gray-50 flex items-center justify-center p-6 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                                            <img
                                                src={magazine.coverImage}
                                                alt={magazine.title}
                                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gold-accent/0 group-hover:bg-gold-accent/5 transition-colors duration-300"></div>
                                        </div>

                                        <div className="text-center space-y-1">
                                            <h3 className="text-xl font-serif text-ink italic group-hover:text-deep-red transition-colors">{magazine.title}</h3>
                                            {magazine.description && (
                                                <p className="text-ink/60 font-sans tracking-widest uppercase text-[10px] font-bold">
                                                    {magazine.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PoesiaVisual;
