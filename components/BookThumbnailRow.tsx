import React from 'react';
import { BOOKS } from '../constants';

export const BookThumbnailRow: React.FC = () => (
    <div className="grid md:grid-cols-2 gap-12 mb-12">
        {BOOKS.map((book) => {
            if (book.featured) {
                return (
                    <div key={book.id} className="md:col-span-2 flex flex-col md:flex-row gap-8 bg-white border border-gold/10 p-6 md:p-12 rounded-sm shadow-xl group items-center">
                        {/* Full Cover Container */}
                        <div className="w-full md:w-5/12 relative rounded-sm overflow-hidden shadow-2xl bg-stone-100 flex items-center justify-center">
                            <img
                                src={book.coverUrl}
                                alt={`${book.title} cover`}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />

                            {(book.downloads || (book.purchaseUrl && book.purchaseUrl !== '#')) && (
                                <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 px-8">
                                    {book.downloads?.map((download, dIdx) => (
                                        <a
                                            key={dIdx}
                                            href={download.url}
                                            download
                                            className="w-full text-center border border-white text-white px-4 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors text-[10px]"
                                        >
                                            {download.label}
                                        </a>
                                    ))}
                                    {book.purchaseUrl && book.purchaseUrl !== '#' && (
                                        <a
                                            href={book.purchaseUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full text-center border border-white text-white px-4 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors text-[10px]"
                                        >
                                            Comprar
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Featured Description */}
                        <div className="w-full md:w-7/12 flex flex-col justify-center">
                            <div className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-4 font-bold">Última Publicación</div>
                            <h3 className="text-3xl md:text-5xl font-serif text-ink mb-3 leading-tight italic">{book.title}</h3>
                            {book.year && <p className="text-deep-red text-sm font-sans mb-8">{book.year}</p>}
                            <p className="text-ink/70 font-light leading-relaxed text-lg text-justify">
                                {book.description}
                            </p>
                        </div>
                    </div>
                );
            }

            // Standard layout for other books
            return (
                <div key={book.id} className="flex flex-col group">
                    <div className={`relative w-full mb-6 rounded-sm shadow-lg overflow-hidden ${book.aspectRatio || 'aspect-video'}`}>
                        <img
                            src={book.coverUrl}
                            alt={`${book.title} cover`}
                            className={`w-full h-full ${book.coverPosition || 'object-cover object-top'} transition-transform duration-500 group-hover:scale-105`}
                        />
                        {(book.downloads || (book.purchaseUrl && book.purchaseUrl !== '#')) && (
                            <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 px-8">
                                {book.downloads?.map((download, dIdx) => (
                                    <a
                                        key={dIdx}
                                        href={download.url}
                                        download
                                        className="w-full text-center border border-white text-white px-4 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors text-[10px]"
                                    >
                                        {download.label}
                                    </a>
                                ))}
                                {book.purchaseUrl && book.purchaseUrl !== '#' && (
                                    <a
                                        href={book.purchaseUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center border border-white text-white px-4 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors text-[10px]"
                                    >
                                        Comprar
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    <h3 className="text-2xl font-serif text-ink mb-1">{book.title}</h3>
                    {book.year && <p className="text-deep-red text-sm font-sans mb-3">{book.year}</p>}
                    <p className="text-ink/70 font-light leading-relaxed text-sm text-justify">
                        {book.description}
                    </p>
                </div>
            );
        })}
    </div>
);
