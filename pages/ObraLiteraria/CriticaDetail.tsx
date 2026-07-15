import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LITERARY_CRITICISMS } from '../../constants';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '../../i18n/I18nProvider';
import { LITERARY_CRITICISM_UI } from '../../i18n/literaryMessages';

const CriticaDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { locale, path } = useI18n();
    const ui = LITERARY_CRITICISM_UI[locale];
    const criticism = LITERARY_CRITICISMS.find((c) => c.slug === slug);

    if (!criticism) {
        return <Navigate to={path('/obra-literaria/critica')} replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Link
                to={path('/obra-literaria/critica')}
                className="inline-flex items-center text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {ui.back}
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-serif text-ink mb-4">{criticism.publication}</h1>
                {criticism.title && (
                    <h2 className="text-2xl text-ink/60 font-serif mb-2">{criticism.title}</h2>
                )}
                <div className="w-24 h-1 bg-deep-red mb-6"></div>
                <p className="text-ink/60 font-sans uppercase tracking-widest">{criticism.year}</p>
            </div>

            {criticism.reviews ? (
                <div className="space-y-24">
                    {criticism.reviews.map((review, index) => (
                        <div key={review.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
                            {/* Image Column */}
                            <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                                <div className="aspect-[3/4] relative shadow-lg bg-white p-2 transform">
                                    {review.imageUrl ? (
                                        <img
                                            src={review.imageUrl}
                                            alt={review.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-paper-dark flex items-center justify-center text-ink/20">
                                            {ui.noImage}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-serif text-ink mb-2">{review.title}</h3>
                                    <div className="text-deep-red font-sans text-sm tracking-widest uppercase mb-1">
                                        {review.author}
                                    </div>
                                    <div className="text-ink/50 text-xs italic mb-6">
                                        {review.publicationInfo}
                                    </div>
                                </div>

                                <div className="text-ink/80 font-light leading-relaxed">
                                    {review.text.split('\n').map((line, i) => {
                                        const isRight = line.trim().startsWith('[R]');
                                        const cleanLine = isRight ? line.trim().slice(3).trim() : line;

                                        // Check for image marker [[IMG:index]]
                                        const imgMatch = cleanLine.match(/^\[\[IMG:(?:([RL]):)?(\d+)\]\]$/);
                                        if (imgMatch && review.images) {
                                            const align = imgMatch[1];
                                            const imgIndex = parseInt(imgMatch[2]);

                                            if (review.images[imgIndex]) {
                                                if (align === 'R') {
                                                    return (
                                                        <div key={i} className="float-right ml-6 mb-4 max-w-[150px] md:max-w-[200px] clear-left">
                                                            <img
                                                                src={review.images[imgIndex]}
                                                                alt={ui.illustrativeImage(imgIndex + 1)}
                                                                className="w-full h-auto object-contain rounded-sm shadow-sm"
                                                            />
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <div key={i} className="my-8 flex justify-center">
                                                        <img
                                                            src={review.images[imgIndex]}
                                                            alt={ui.illustrativeImage(imgIndex + 1)}
                                                            className="max-w-full h-auto max-h-[500px] object-contain rounded-sm shadow-sm"
                                                        />
                                                    </div>
                                                );
                                            }
                                        }

                                        if (cleanLine.trim() === '') {
                                            return <div key={i} className="h-4" />;
                                        }

                                        return (
                                            <div key={i} className={isRight ? 'text-right' : 'text-justify'}>
                                                {cleanLine.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).map((part, index) => {
                                                    if (part.startsWith('**') && part.endsWith('**')) {
                                                        return <strong key={index} className="font-bold text-ink">{part.slice(2, -2)}</strong>;
                                                    } else if (part.startsWith('_') && part.endsWith('_')) {
                                                        return <em key={index} className="italic text-ink font-light">{part.slice(1, -1)}</em>;
                                                    }
                                                    return <span key={index}>{part}</span>;
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white/50 p-8 rounded-lg text-center">
                    <p className="text-ink/60 italic whitespace-pre-line">
                        {criticism.excerpt || ui.unavailable}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CriticaDetail;
