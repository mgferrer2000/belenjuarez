import React from 'react';
import { Link } from 'react-router-dom';
import { INTERVIEWS } from '../../constants';
import { useI18n } from '../../i18n/I18nProvider';
import { INTERVIEW_UI, localizeInterview } from '../../i18n/interviewMessages';

const Entrevistas: React.FC = () => {
    const { locale, path } = useI18n();
    const ui = INTERVIEW_UI[locale];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-12">
                <h2 className="text-3xl font-serif text-ink mb-6">{ui.heading}</h2>
                <div className="w-24 h-1 bg-deep-red mb-8"></div>
                <p className="text-lg text-ink/80 font-light leading-relaxed max-w-3xl">
                    {ui.introduction}
                </p>
            </div>

            <div className="space-y-12">
                {INTERVIEWS.map((originalInterview) => {
                    const interview = localizeInterview(originalInterview, locale);
                    const detailPath = path(`/obra-literaria/entrevistas/${interview.slug}`);

                    return (
                    <article key={interview.id} className="flex flex-col md:flex-row gap-8 bg-white/50 p-6 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
                        {/* Image Column */}
                        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                            <Link
                                to={detailPath}
                                className="block relative aspect-[3/4] overflow-hidden shadow-md group rounded-sm"
                            >
                                <img
                                    src={interview.coverUrl}
                                    alt={ui.coverAlt(interview.title)}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-serif text-2xl text-ink mb-2 leading-tight">
                                    <Link to={detailPath} className="hover:text-deep-red transition-colors">
                                        {interview.title}
                                    </Link>
                                </h3>

                                <div className="flex flex-col gap-1 text-sm text-ink/60 mb-4 font-sans tracking-wide border-l-2 border-deep-red/30 pl-3">
                                    <span className="uppercase font-semibold text-deep-red">{interview.publication}</span>
                                    <span>{interview.date} {interview.location && `• ${interview.location}`}</span>
                                    {interview.interviewer && <span>{ui.by} {interview.interviewer}</span>}
                                </div>

                                <p className="text-ink/80 font-light leading-relaxed mb-4 text-justify line-clamp-4">
                                    {interview.intro}
                                </p>
                            </div>

                            <div className="mt-4 text-right md:text-left">
                                <Link
                                    to={detailPath}
                                    className="inline-flex items-center text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors pb-1 border-b border-deep-red hover:border-ink"
                                >
                                    {ui.continueReading}
                                </Link>
                            </div>
                        </div>
                    </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Entrevistas;
