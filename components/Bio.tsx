
import React from 'react';
import { motion } from 'framer-motion';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-32 bg-paper text-ink overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section 1: Hero Header (pluma5.jpg) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-4/12 relative mx-auto max-w-[200px] lg:max-w-[240px]"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/sobrebelen/pluma5.jpg"
                alt="Belén Juárez Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/5 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-8/12 flex flex-col justify-center"
          >
            <span className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-4 block">Biografía</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Sobre Belén Juárez</h2>
            <div className="font-sans font-light text-ink/80 text-xl leading-relaxed space-y-6 italic">
              <p>
                Belén Juárez nace en París y reside actualmente en Granada. Doctora en Farmacia, es profesora Titular de Microbiología de la Universidad de Granada. Poeta desde temprana edad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Trayectoria (3B3.jpg) */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-4/12 mx-auto max-w-sm lg:max-w-none"
          >
            <div className="aspect-square rounded-sm overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="/images/sobrebelen/3B3.jpg"
                alt="Trayectoria Artística"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] text-ink/40 mt-4 uppercase tracking-widest text-right italic font-sans">— Momentos en la trayectoria</p>
          </motion.div>

          <div className="w-full lg:w-8/12 font-sans font-light text-ink/70 text-lg leading-relaxed space-y-8 text-justify">
            <p>
              Ha realizado dos exposiciones de pintura: “Rostros” (UGR, 1991) y una Exposición colectiva Internacional de Pintura (Torres Vedras, Portugal, 1998). Ha colaborado en diversas exposiciones de Poesía Visual: “Poesía para ver” (Madrid, 1999; Barcelona 2000; Pineda del Mar, 2000; Palencia 2001, Valladolid, 2002).
            </p>
            <p>
              Ilustradora y traductora al francés de poemas del libro “Las Noches Azules del Alma” (Fundación de Estudios Euroárabes, 2001). Llevó sus versos al Instituto Cervantes de Beirut (Poetas del Mediterráneo, Encuentro de poetas libaneses y españoles, 2002). Ha participado en diversas antologías de Poesía, y ha publicado artículos en revistas literarias nacionales e internacionales y diarios.
            </p>
          </div>
        </div>

        {/* Section 3: Mid-page Gallery (5B2, 6B, 9B4) */}
        <div className="flex flex-col gap-8 mb-32">
          {/* Featured Landscape Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-sm overflow-hidden shadow-lg border border-gold/5"
          >
            <img src="/images/sobrebelen/5B2.jpg" className="w-full h-auto object-cover opacity-90" alt="Detalle artístico apaisado" />
          </motion.div>

          {/* Sibling Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-sm overflow-hidden relative group shadow-md"
            >
              <img src="/images/sobrebelen/6B.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Detalle" />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-all duration-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-sm overflow-hidden shadow-md"
            >
              <img src="/images/sobrebelen/9B4.jpg" className="w-full h-full object-cover" alt="Estudio" />
            </motion.div>
          </div>
        </div>

        {/* Section 4: Publicaciones (belen2.jpg) */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-4/12 mx-auto max-w-sm lg:max-w-none"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="/images/sobrebelen/belen2.jpg"
                alt="Retrato Artístico"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-8/12 font-sans font-light text-ink/70 text-lg leading-relaxed space-y-8 text-justify">
            <p>
              Participó en el Encuentro de Mujeres Poetas (Victoria-Gasteiz, 2005) con la presentación audiovisual “Música y Poesía”. Además es autora del relato “Á l’autre bout du monde” publicado en “El Tam Tam de las nubes”. Recientemente (en 2025) ha participado en el proyecto antológico “Encuentro de Letras Celestes” (Puebla de los Infantes, Sevilla).
            </p>
            <p>
              A pesar de tener una extensa obra inédita, únicamente ha publicado dos libros de poesía “Destierro en cuatro ángulos” (Ed. Devenir 1999) y “La Noche de Ayer” (Alhulia, 2002). Recientemente ha publicado un álbum de música “Horizonte de Sucesos” (United Master, 2025), donde las letras de las canciones proceden de poemas del libro de similar título de próxima publicación. Con este gesto Belén pretende abrir una nueva puerta a la Poesía a través de la música. Tanto las voces como las composiciones musicales fueron diseñadas con herramientas de inteligencia artificial. Las voces no son de nadie, pertenecen a la Poesía.
            </p>
          </div>
        </div>

        {/* Section 5: Gallery Strip (7B2, IMG_0314, IMG_7807) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 px-12 md:px-0 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <img src="/images/sobrebelen/7B2.jpeg" className="w-full aspect-[4/5] object-cover rounded-sm shadow-md" alt="Espacio" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:-mt-12">
            <img src="/images/sobrebelen/IMG_0314.JPEG" className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl border-4 border-white/50" alt="Retrato Belén" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <img src="/images/sobrebelen/IMG_7807.JPEG" className="w-full aspect-[4/5] object-cover rounded-sm shadow-md" alt="Detalle poético" />
          </motion.div>
        </div>

        {/* Section 6: Quote & Philosophy (mano.jpg, 9B4.jpg) */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16 relative">
            <span className="text-gold text-4xl font-serif block mb-8">“</span>
            <h3 className="text-3xl md:text-4xl font-serif text-ink italic leading-snug mb-8 px-8">
              La Poesía no hay que entenderla, hay que vivirla. No conozco ningún poeta «auténtico» que no tenga corazón
            </h3>
            <span className="text-gold text-4xl font-serif block rotate-180">“</span>

          </div>

          {/* Featured Images: Mano and 2B3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="/images/sobrebelen/mano.jpg" alt="Detalle de las manos" className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <img src="/images/sobrebelen/2B3.jpg" alt="Detalle artístico" className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl" />
            </motion.div>
          </div>

          <div className="text-center mb-8">
            <h4 className="text-2xl font-serif text-deep-red italic">¿Qué pienso?</h4>
          </div>
          <div className="font-sans font-light text-ink/70 text-lg leading-relaxed space-y-8 text-justify first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-gold first-letter:leading-none">
            <p>
              Escribo desde muy temprana edad. Nunca he mostrado aquellos primeros poemas. Pertenecen al silencio. Defiendo los derechos de humanos, animales y vegetales. Creo que la vida se sostiene sobre la coherencia de nuestras acciones y que no somos dueños ni de la vida ni del planeta donde habitamos. Soy una romántica antigua, apasionada del lenguaje como arma de defensa contra la ignorancia.
            </p>
            <p>
              Me debo a la Poesía, los versos que escribo no me pertenecen. Cuando un poema salta del papel al lector adquiere libertad, identidad, y en algunas ocasiones inmortalidad. A veces, la Poesía traspasa el entendimiento, se infiltra en otros planos de la realidad donde las emociones y el lenguaje tejen ese espacio amable donde descansar la cordura y la razón. La Poesía no hay que entenderla, hay que vivirla. No conozco ningún poeta «auténtico» que no tenga corazón.
            </p>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-20 pt-16 border-t border-gold/10 flex flex-wrap justify-center gap-16 mb-24">
          <div className="text-center group">
            <span className="block text-5xl font-serif text-deep-red group-hover:scale-110 transition-transform cursor-default">2</span>
            <span className="text-xs uppercase tracking-[0.3em] text-ink/40 mt-2 block">Libros Publicados</span>
          </div>
          <div className="text-center group">
            <span className="block text-5xl font-serif text-deep-red group-hover:scale-110 transition-transform cursor-default">15+</span>
            <span className="text-xs uppercase tracking-[0.3em] text-ink/40 mt-2 block">Colaboraciones</span>
          </div>
          <div className="text-center group">
            <span className="block text-5xl font-serif text-deep-red group-hover:scale-110 transition-transform cursor-default">1</span>
            <span className="text-xs uppercase tracking-[0.3em] text-ink/40 mt-2 block">Álbum Musical</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;