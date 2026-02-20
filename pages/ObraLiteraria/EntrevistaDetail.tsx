import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INTERVIEWS } from '../../constants';
import { ArrowLeft } from 'lucide-react';

const EntrevistaDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const interview = INTERVIEWS.find((i) => i.slug === slug);

    if (!interview) {
        return <Navigate to="/obra-literaria/entrevistas" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Link
                to="/obra-literaria/entrevistas"
                className="inline-flex items-center text-deep-red text-sm font-sans uppercase tracking-widest hover:text-ink transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Volver
            </Link>

            <article className="prose prose-lg mx-auto max-w-none">
                <div className="mb-12 not-prose">
                    <h1 className="text-4xl font-serif text-ink mb-2 leading-tight">{interview.title}</h1>
                    <div className="w-24 h-1 bg-deep-red mb-6"></div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-sans uppercase tracking-widest text-ink/60 border-b border-ink/10 pb-6">
                        <span className="font-semibold text-deep-red">{interview.publication}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{interview.date}</span>
                        {interview.location && (
                            <>
                                <span className="hidden md:inline">•</span>
                                <span>{interview.location}</span>
                            </>
                        )}
                        {interview.interviewer && (
                            <>
                                <span className="hidden md:inline">•</span>
                                <span>Por {interview.interviewer}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Cover Image in Detail Page - Optional, but good for context */}
                <div className="mb-16 float-left mr-8 max-w-[280px] not-prose hidden md:block">
                    <div className="aspect-[3/4] relative shadow-lg bg-white p-2 transform">
                        <img
                            src={interview.coverUrl}
                            alt={interview.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mobile Image */}
                <div className="mb-16 mx-auto max-w-[200px] not-prose md:hidden">
                    <div className="aspect-[3/4] relative shadow-lg bg-white p-2 transform">
                        <img
                            src={interview.coverUrl}
                            alt={interview.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>


                <div className="text-ink/80 font-light leading-relaxed text-justify">
                    {/* Intro */}
                    {!interview.hideIntroInDetail && interview.intro && (
                        <div className="mb-8 font-serif text-lg italic text-ink/70 border-l-4 border-deep-red pl-4">
                            {interview.intro}
                        </div>
                    )}

                    {interview.content.split('\n').map((line, i) => {
                        const cleanLine = line.trim();

                        if (cleanLine === '') {
                            return <div key={i} className="h-4" />;
                        }

                        if (cleanLine.startsWith('[TITLE-CENTER-BOLD]')) {
                            return (
                                <div key={i} className="font-serif font-bold text-center text-xl text-ink mb-4 mt-8">
                                    {cleanLine.substring(19).trim()}
                                </div>
                            );
                        }

                        if (cleanLine.startsWith('[SUBTITLE-CENTER-ITALIC]')) {
                            return (
                                <div key={i} className="font-serif italic flex justify-center text-center text-ink/80 mb-0 leading-snug w-full">
                                    {cleanLine.substring(24).trim()}
                                </div>
                            );
                        }

                        if (cleanLine.startsWith('[SUBTITLE-CENTER]')) {
                            return (
                                <div key={i} className="font-serif flex justify-center text-center text-ink/80 mb-0 leading-snug w-full">
                                    {cleanLine.substring(17).trim()}
                                </div>
                            );
                        }


                        // Check for double image marker [DOUBLE-IMG:index1:index2]
                        if (cleanLine.startsWith('[DOUBLE-IMG:')) {
                            const doubleImgMatch = cleanLine.match(/^\[DOUBLE-IMG:(\d+):(\d+)\]$/);
                            if (doubleImgMatch && interview.images) {
                                const idx1 = parseInt(doubleImgMatch[1]);
                                const idx2 = parseInt(doubleImgMatch[2]);
                                const imgUrl1 = interview.images[idx1];
                                const imgUrl2 = interview.images[idx2];

                                if (imgUrl1 && imgUrl2) {
                                    return (
                                        <div key={i} className="my-8 flex justify-center gap-4 not-prose w-full clear-both flex-wrap">
                                            <div className="relative shadow-md bg-white p-1.5 max-w-[45%] md:max-w-[280px]">
                                                <img
                                                    src={imgUrl1}
                                                    alt={`Ilustración entrevista ${idx1 + 1}`}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                            <div className="relative shadow-md bg-white p-1.5 max-w-[45%] md:max-w-[280px]">
                                                <img
                                                    src={imgUrl2}
                                                    alt={`Ilustración entrevista ${idx2 + 1}`}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            }
                        }

                        // Check for image marker [IMG:index] or [IMG:index:ALIGN]
                        if (cleanLine.startsWith('[IMG:')) {
                            const imgMatch = cleanLine.match(/^\[IMG:(\d+)(?::([LRC]))?\]$/);
                            if (imgMatch && interview.images) {
                                const imgIndex = parseInt(imgMatch[1]);
                                const align = imgMatch[2] || 'C'; // Default to Center
                                const imgUrl = interview.images[imgIndex];

                                if (imgUrl) {
                                    if (align === 'L') {
                                        return (
                                            <div key={i} className="float-left mr-6 mb-2 mt-2 max-w-[200px] md:max-w-[280px] not-prose">
                                                <div className="relative shadow-md bg-white p-1.5">
                                                    <img
                                                        src={imgUrl}
                                                        alt={`Ilustración entrevista ${imgIndex + 1}`}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    } else if (align === 'R') {
                                        return (
                                            <div key={i} className="float-right ml-6 mb-2 mt-2 max-w-[200px] md:max-w-[280px] not-prose">
                                                <div className="relative shadow-md bg-white p-1.5">
                                                    <img
                                                        src={imgUrl}
                                                        alt={`Ilustración entrevista ${imgIndex + 1}`}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={i} className="mt-8 mb-2 flex justify-center not-prose w-full clear-both">
                                                <div className="relative shadow-lg bg-white p-2 max-w-[300px] md:max-w-[400px]">
                                                    <img
                                                        src={imgUrl}
                                                        alt={`Ilustración entrevista ${imgIndex + 1}`}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                }
                            }
                        }

                        if (cleanLine.startsWith('[BOOK]')) {
                            const bookContent = cleanLine.substring(6).split('|');
                            const title = bookContent[0];
                            const details = bookContent.slice(1).join('|');

                            // Calculate if it's the last book in the list (rough heuristic: next line is not a book)
                            const nextLine = interview.content.split('\n')[i + 1]?.trim() || '';
                            const isLastBook = !nextLine.startsWith('[BOOK]') && nextLine !== '';

                            return (
                                <React.Fragment key={i}>
                                    <div className="flow-root mb-4">
                                        <div className="font-serif text-lg font-bold text-ink leading-snug">{title.trim()}</div>
                                        <div className="font-serif text-lg text-ink/80 leading-snug">{details.trim()}</div>
                                    </div>
                                    {isLastBook && <div className="clear-both h-16 w-full"></div>}
                                </React.Fragment>
                            );
                        }


                        if (cleanLine === '[BR]') {
                            return <div key={i} className="clear-both h-8 w-full"></div>;
                        }

                        const isPoem = cleanLine.startsWith('[POEM]');
                        // Trim to ensure proper centering without leading spaces
                        const lineContent = isPoem ? cleanLine.substring(6).trim() : cleanLine;


                        // Check for Q&A formatting
                        let contentToRender: React.ReactNode = lineContent;
                        let paragraphClass = `
                            text-ink/80 font-serif text-lg
                            ${isPoem ? 'mb-0 leading-snug italic text-center font-medium mx-8 md:mx-16 lg:mx-24' : 'mb-4 leading-relaxed text-justify'}
                        `;

                        if (cleanLine.match(/^(F\.|F:|Ficciones\.)/)) {
                            // Question - Bold entire line
                            paragraphClass = "mb-4 text-ink leading-relaxed font-serif text-lg text-justify font-bold";
                        } else if (cleanLine.startsWith('—')) {
                            // Answer with dash
                            paragraphClass = "mb-4 text-ink/80 leading-relaxed font-serif text-lg text-justify";
                            contentToRender = (
                                <>
                                    <span className="font-bold mr-1">—</span>
                                    {
                                        lineContent.substring(1).trim().split(/(\*\*[^*]+\*\*|_[^_]+_)/g).map((part, index) => {
                                            if (typeof part === 'string' && part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={index} className="font-bold text-ink">{part.slice(2, -2)}</strong>;
                                            } else if (typeof part === 'string' && part.startsWith('_') && part.endsWith('_')) {
                                                return <em key={index} className="italic text-ink font-light">{part.slice(1, -1)}</em>;
                                            }
                                            return <span key={index}>{part}</span>;
                                        })
                                    }
                                </>
                            );
                        } else {
                            const match = cleanLine.match(/^(A\. C\.|A\. Carvajal):/);
                            if (match) {
                                // Answer with name
                                const prefix = match[0];
                                const rest = cleanLine.substring(prefix.length).trim();
                                paragraphClass = "mb-4 text-ink/80 leading-relaxed font-serif text-lg text-justify";
                                contentToRender = (
                                    <>
                                        <span className="font-bold mr-1">{prefix}</span>
                                        {
                                            rest.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).map((part, index) => {
                                                if (typeof part === 'string' && part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={index} className="font-bold text-ink">{part.slice(2, -2)}</strong>;
                                                } else if (typeof part === 'string' && part.startsWith('_') && part.endsWith('_')) {
                                                    return <em key={index} className="italic text-ink font-light">{part.slice(1, -1)}</em>;
                                                }
                                                return <span key={index}>{part}</span>;
                                            })
                                        }
                                    </>
                                );
                            } else if (typeof contentToRender === 'string') {
                                // Default rendering with markdown support
                                contentToRender = contentToRender.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).map((part, index) => {
                                    if (typeof part === 'string' && part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={index} className="font-bold text-ink">{part.slice(2, -2)}</strong>;
                                    } else if (typeof part === 'string' && part.startsWith('_') && part.endsWith('_')) {
                                        return <em key={index} className="italic text-ink font-light">{part.slice(1, -1)}</em>;
                                    }
                                    return <span key={index}>{part}</span>;
                                });
                            }
                        }

                        return (
                            <p key={i} className={paragraphClass}>
                                {contentToRender}
                            </p>
                        );
                    })}
                </div>
            </article>
        </div>
    );
};

export default EntrevistaDetail;
