import React from 'react';
import { BOOKS } from '../constants';

export const BookThumbnailRow: React.FC = () => (
    <div className="grid md:grid-cols-3 gap-12 mb-12">
        {BOOKS.map((book) => (
            <div key={book.id} className="flex flex-col group">
                <div className="relative w-full mb-6 rounded-sm shadow-lg overflow-hidden aspect-[2/3]">
                    <img
                        src={book.coverUrl}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        ))}
    </div>
);

