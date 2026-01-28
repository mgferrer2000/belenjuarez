import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, ExternalLink, ShoppingCart } from 'lucide-react';
import { COLLABORATIONS } from '../../constants';

const CollaborationDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const collaboration = COLLABORATIONS.find(c => c.id === id);

    if (!collaboration) {
        return (
            <div className="pt-24 pb-16 text-center">
                <h2 className="text-2xl font-serif text-ink mb-4">Publicación no encontrada</h2>
                <button
                    onClick={() => navigate('/obra-literaria/antologias')}
                    className="text-deep-red hover:underline flex items-center justify-center gap-2"
                >
                    <ArrowLeft size={16} /> Volver a Antologías
                </button>
            </div>
        );
    }

    // Split full text into paragraphs
    const paragraphs = collaboration.fullText
        ? collaboration.fullText.trim().split('\n\n')
        : [collaboration.description];

    return (
        <div className="max-w-4xl mx-auto pb-20 fade-in">
            <Link
                to="/obra-literaria/antologias"
                className="inline-flex items-center text-gray-500 hover:text-deep-red mb-8 transition-colors"
            >
                <ArrowLeft size={16} className="mr-2" />
                Volver a Antologías
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Column: Image and Actions */}
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="sticky top-24">
                        <div className="aspect-[2/3] w-full relative shadow-md mb-6 overflow-hidden">
                            <img
                                src={collaboration.coverUrl}
                                alt={collaboration.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-3">


                            {collaboration.url && (
                                <a
                                    href={collaboration.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2 px-4 border border-ink text-ink text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    Leer Online <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="mb-8 border-b border-gray-200 pb-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded uppercase tracking-wider text-xs font-semibold">
                                {collaboration.type}
                            </span>
                            <span className="flex items-center text-gray-500 gap-1">
                                <Calendar size={14} /> {collaboration.date}
                            </span>
                        </div>

                        <h1 className="text-3xl font-serif text-ink mb-2">
                            {collaboration.title}
                        </h1>
                        <h2 className="text-xl text-gray-600 font-serif italic mb-4">
                            En: {collaboration.publication}
                        </h2>
                    </div>

                    <div className="prose prose-slate max-w-none font-serif text-lg leading-relaxed text-ink/90 clearfix">
                        {paragraphs.map((paragraph, index) => {
                            // Extract all image markers
                            const imgMatches = [...paragraph.matchAll(/\[\[IMG:([A-Z]+):(\d+)\]\]/g)];
                            let cleanText = paragraph;

                            // Remove markers from text
                            imgMatches.forEach(match => {
                                cleanText = cleanText.replace(match[0], '');
                            });

                            const leftImages = imgMatches.filter(m => m[1] === 'L');
                            const rightImages = imgMatches.filter(m => m[1] === 'R');
                            const bottomRightImages = imgMatches.filter(m => m[1] === 'BR');
                            const bottomImages = imgMatches.filter(m => m[1] === 'B');

                            const renderImages = (matches: RegExpMatchArray[]) => (
                                <div className="flex flex-col gap-4 w-48 md:w-56">
                                    {matches.map((match, i) => {
                                        const imgIndex = parseInt(match[2]);
                                        const imgUrl = collaboration.images?.[imgIndex];
                                        if (!imgUrl) return null;

                                        return (
                                            <div key={i} className="rounded-lg overflow-hidden shadow-md border border-gray-100">
                                                <img
                                                    src={imgUrl}
                                                    alt={`Ilustración para ${collaboration.title}`}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            );

                            // Function to interpret markdown per line
                            const renderParagraphContent = (text: string) => {
                                return text.split('\n').map((line, i) => {
                                    const doubleIndentedMatch = line.match(/^\s*>>>\s*(.*)$/);
                                    const centeredMatch = !doubleIndentedMatch && line.match(/^\s*>>\s*(.*)$/);
                                    const indentedMatch = !doubleIndentedMatch && !centeredMatch && line.match(/^\s*>\s*(.*)$/);

                                    const isDoubleIndented = !!doubleIndentedMatch;
                                    const isCentered = !!centeredMatch;
                                    const isIndented = !!indentedMatch;

                                    const lineContent = isDoubleIndented ? doubleIndentedMatch![1] : (isCentered ? centeredMatch![1] : (isIndented ? indentedMatch![1] : line));

                                    // Bold, Italic, and Bold+Italic parsing
                                    const parts = lineContent.split(/(\*\*\*.*?\*\*\*)/g).map((part, j) => {
                                        if (part.startsWith('***') && part.endsWith('***')) {
                                            return <strong key={j} className="font-bold text-ink"><em className="italic">{part.slice(3, -3)}</em></strong>;
                                        }
                                        return part.split(/(\*\*.*?\*\*)/g).map((subPart, k) => {
                                            if (subPart.startsWith('**') && subPart.endsWith('**')) {
                                                return <strong key={`${j}-${k}`} className="font-bold text-ink">{subPart.slice(2, -2)}</strong>;
                                            }
                                            return subPart.split(/(_.*?_)/g).map((innerPart, m) => {
                                                if (innerPart.startsWith('_') && innerPart.endsWith('_')) {
                                                    return <em key={`${j}-${k}-${m}`} className="italic">{innerPart.slice(1, -1)}</em>;
                                                }
                                                return innerPart;
                                            });
                                        });
                                    }).flat(2);

                                    // Return styled block
                                    let className = 'block ';
                                    if (isDoubleIndented) className += 'pl-24';
                                    else if (isCentered) className += 'text-center w-full';
                                    else if (isIndented) className += 'pl-12 italic';

                                    if (line.trim() === '') className += ' h-4';

                                    return (
                                        <span key={i} className={className}>
                                            {parts.length > 0 && parts[0] !== "" ? parts : (line.trim() === '' ? <br /> : parts)}
                                        </span>
                                    );
                                });
                            };

                            // Bottom alignment (Row below text)
                            if (bottomImages.length > 0) {
                                return (
                                    <div key={index} className="mb-4">
                                        <p className="text-justify mb-8">
                                            {renderParagraphContent(cleanText)}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-8 w-full">
                                            {bottomImages.map((match, i) => {
                                                const imgIndex = parseInt(match[2]);
                                                const imgUrl = collaboration.images?.[imgIndex];
                                                if (!imgUrl) return null;

                                                return (
                                                    <div key={i} className="rounded-lg overflow-hidden shadow-md border border-gray-100 w-48 md:w-56 flex-shrink-0">
                                                        <img
                                                            src={imgUrl}
                                                            alt={`Ilustración para ${collaboration.title}`}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            }

                            // Bottom Right alignment (Flexbox)
                            if (bottomRightImages.length > 0) {
                                return (
                                    <div key={index} className="flex flex-col md:flex-row items-end gap-6 mb-4">
                                        <p className="flex-1 text-justify">
                                            {renderParagraphContent(cleanText)}
                                        </p>
                                        <div className="flex-shrink-0 mb-1 w-full md:w-auto flex justify-end md:block">
                                            {renderImages(bottomRightImages)}
                                        </div>
                                    </div>
                                );
                            }

                            if (leftImages.length > 0 || rightImages.length > 0) {
                                return (
                                    <div key={index} className="mb-4">
                                        <div className={`md:w-56 w-full ${leftImages.length > 0 ? 'md:float-left md:mr-10' : 'md:float-right md:ml-10'} mb-6 self-center md:self-start`}>
                                            {renderImages(leftImages.length > 0 ? leftImages : rightImages)}
                                        </div>
                                        <p className="text-justify">
                                            {renderParagraphContent(cleanText)}
                                        </p>
                                    </div>
                                );
                            }

                            return (
                                <p key={index} className="mb-4 text-justify">
                                    {renderParagraphContent(cleanText)}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationDetail;
