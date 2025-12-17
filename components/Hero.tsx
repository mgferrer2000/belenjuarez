import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
          alt="Background Texture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-lg md:text-xl font-sans tracking-[0.3em] text-deep-red uppercase mb-4">
            Poesía • Música • Arte Visual
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif font-medium text-ink mb-8 leading-tight"
        >
          La arquitectura <br /> del verso
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl font-sans font-light text-ink/70 max-w-2xl mx-auto leading-relaxed"
        >
          "Escribo para encontrar el nombre exacto de las cosas que no existen hasta que se nombran."
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink/50"
      >
        <a href="#bio" aria-label="Scroll down">
          <ArrowDown size={32} strokeWidth={1} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;