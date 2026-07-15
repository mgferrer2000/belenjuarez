import React from 'react';
import { Link } from 'react-router-dom';
import { LITERARY_CRITICISMS } from '../../constants';
import { useI18n } from '../../i18n/I18nProvider';
import { LITERARY_CRITICISM_UI } from '../../i18n/literaryMessages';

const Critica: React.FC = () => {
    const { locale, path } = useI18n();
    const ui = LITERARY_CRITICISM_UI[locale];
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-serif text-ink mb-6">{ui.title}</h2>
                <div className="w-24 h-1 bg-deep-red mb-8"></div>
                <p className="text-lg text-ink/80 font-light leading-relaxed max-w-3xl">
                    {ui.introduction}
                </p>
            </div>

            <div className="space-y-12">
                {LITERARY_CRITICISMS.map((criticism) => (
                    <article key={criticism.id} className="flex flex-col md:flex-row gap-8 bg-white/50 p-6 rounded-lg hover:bg-white transition-colors duration-300">
                        {/* Image Column */}
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <Link
                                to={path(`/obra-literaria/critica/${criticism.slug}`)}
                                className="block relative aspect-[3/4] overflow-hidden shadow-md group"
                            >
                                <img
                                    src={criticism.coverUrl}
                                    alt={`${criticism.publication} ${criticism.title || ''}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-2xl text-ink mb-1">
                                    <Link to={path(`/obra-literaria/critica/${criticism.slug}`)} className="hover:text-deep-red transition-colors">
                                        {criticism.publication}
                                    </Link>
                                </h3>

                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/60 mb-4 font-sans uppercase tracking-wide">
                                    {criticism.title && <span>{criticism.title}</span>}
                                    <span>•</span>
                                    <span>{ui.byline(criticism.year)}</span>
                                </div>

                                {criticism.excerpt ? (
                                    <p className="text-ink/80 font-light leading-relaxed mb-4 text-justify whitespace-pre-line">
                                        {criticism.excerpt}
                                    </p>
                                ) : (
                                    <p className="text-ink/40 font-light italic mb-4">
                                        {ui.pending}
                                    </p>
                                )}
                            </div>

                            <div className="mt-4">
                                <Link
                                    to={path(`/obra-literaria/critica/${criticism.slug}`)}
                                    className="inline-flex items-center text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors pb-1 border-b border-deep-red hover:border-ink"
                                >
                                    {ui.continueReading}
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Critica;
