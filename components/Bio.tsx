import React from 'react';
import { motion } from 'framer-motion';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-paper px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
              alt="Belén Juarez Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-paper border border-ink/10 p-4 shadow-lg flex items-center justify-center hidden md:flex">
            <span className="font-serif italic text-2xl text-deep-red">BJ</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif text-ink mb-8">Sobre Belén</h2>
          <div className="font-sans font-light text-ink/80 space-y-6 text-lg leading-relaxed text-justify">
            <p>
              Belén Juarez no escribe poemas; traza mapas de emociones inexploradas. Nacida en la intersección entre el caos urbano y la quietud del campo, su obra explora la fragilidad de la condición humana a través de una lente que combina la precisión científica con la devoción lírica.
            </p>
            <p>
              Autora de tres poemarios aclamados por la crítica, Belén ha expandido su universo creativo hacia la música con su reciente álbum <em>"Horizonte de sucesos"</em>, una experiencia sonora atmosférica nacida de sus versos.
            </p>
            <p>
              Su trabajo como artista visual complementa su literatura, utilizando carbón y tinta para dar cuerpo físico a las sombras que habitan en sus textos. Su obra es un diálogo constante entre lo que se dice, lo que se calla y lo que se dibuja en el aire.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-ink/10 flex gap-8">
            <div>
              <span className="block text-4xl font-serif text-deep-red">3</span>
              <span className="text-sm uppercase tracking-wider text-ink/60">Libros Publicados</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-deep-red">15+</span>
              <span className="text-sm uppercase tracking-wider text-ink/60">Colaboraciones</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-deep-red">1</span>
              <span className="text-sm uppercase tracking-wider text-ink/60">Álbum Musical</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;