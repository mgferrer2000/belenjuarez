import React from 'react';
import { BOOKS, COLLABORATIONS } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Books: React.FC = () => {
  return (
    <section id="books" className="py-24 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-4">Obra Literaria</h2>
          <div className="w-24 h-1 bg-deep-red mx-auto"></div>
        </div>

        {/* Books Grid */}
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

        {/* Collaborations & Critique */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif text-ink mb-8 flex items-center gap-3">
              <BookOpen size={24} className="text-deep-red"/>
              Colaboraciones y Prensa
            </h3>
            <ul className="space-y-6">
              {COLLABORATIONS.map((collab) => (
                <li key={collab.id} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-ink/80">{collab.publication}</span>
                    <span className="text-xs text-gray-500">{collab.date}</span>
                  </div>
                  <p className="text-ink font-serif italic mb-2">"{collab.title}"</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600 uppercase tracking-wide">{collab.type}</span>
                    {collab.url && (
                      <a href={collab.url} className="text-deep-red text-xs flex items-center gap-1 hover:underline">
                        Leer <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif text-ink mb-6">Crítica Destacada</h3>
            <blockquote className="font-serif text-xl text-ink/80 italic leading-relaxed mb-6">
              "La poesía de Juarez posee una cualidad táctil casi inquietante. Sus palabras no se leen, se sienten en la piel como el frío de una mañana de invierno o el ardor de una herida que empieza a sanar. Es una voz imprescindible."
            </blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-ink">— Roberto Bolaño (Imaginario)</span>
              <span className="text-sm text-gray-500">Revista Letras Libres</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;