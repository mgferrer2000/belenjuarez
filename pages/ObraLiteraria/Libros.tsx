import React from 'react';
import { BOOKS } from '../../constants';
import { motion } from 'framer-motion';

const Libros: React.FC = () => {
    return (
        <div className="grid md:grid-cols-3 gap-12 mb-24">
            {BOOKS.map((book, index) => (
                <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group"
                >
                    <div className="relative aspect-[2/3] mb-6 shadow-2xl overflow-hidden">
                        <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a href={book.purchaseUrl} className="border border-white text-white px-6 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors">
                                Ver Detalles
                            </a>
                        </div>
                    </div>
                    <h3 className="text-2xl font-serif text-ink mb-1">{book.title}</h3>
                    <p className="text-deep-red text-sm font-sans mb-3">{book.year}</p>
                    <p className="text-ink/70 font-light leading-relaxed text-sm">
                        {book.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Libros;
