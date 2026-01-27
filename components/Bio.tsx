
import React from 'react';
import { motion } from 'framer-motion';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-paper px-6">
      <div className="max-w-6xl mx-auto block clearfix">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative md:float-left md:mr-12 mb-8 md:mb-8 w-full md:w-[400px]"
        >
          <div className="aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl">
            <img
              src="/images/sobrebelen/pluma5.png"
              alt="Belén Juarez Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </motion.div>

        <div>
          <h2 className="text-4xl font-serif text-ink mb-8">Sobre Belén Juárez</h2>
          <div className="font-sans font-light text-ink/80 space-y-6 text-lg leading-relaxed text-justify">
            <p>
              Belén Juárez nace en París y reside actualmente en Granada. Doctora en Farmacia, es profesora Titular de Microbiología de la Universidad de Granada. Poeta desde temprana edad. Ha realizado dos exposiciones de pintura: “Rostros” (UGR, 1991) y una Exposición colectiva Internacional de Pintura (Torres Vedras, Portugal, 1998). Ha colaborado en diversas exposiciones de Poesía Visual: “Poesía para ver” (Madrid, 1999; Barcelona 2000; Pineda del Mar, 2000; Palencia 2001, Valladolid, 2002). Ilustradora y traductora al francés de poemas del libro “Las Noches Azules del Alma” (Fundación de Estudios Euroárabes, 2001). Llevó sus versos al Instituto Cervantes de Beirut (Poetas del Mediterráneo, Encuentro de poetas libaneses y españoles, 2002). Ha participado en diversas antologías de Poesía, y ha publicado artículos en revistas literarias nacionales e internacionales y diarios. Participó en el Encuentro de Mujeres Poetas (Victoria-Gasteiz, 2005) con la presentación audiovisual “Música y Poesía”. Además es autora del relato “Á l’autre bout du monde” publicado en “El Tam Tam de las nubes”. Recientemente (en 2025) ha participado en el proyecto antológico “Encuentro de Letras Celestes” (Puebla de los Infantes, Sevilla).
            </p>
            <p>
              A pesar de tener una extensa obra inédita, únicamente ha publicado dos libros de poesía “Destierro en cuatro ángulos” (Ed. Devenir 1999) y “La Noche de Ayer” (Alhulia, 2002). Recientemente ha publicado un álbum de música “Horizonte de Sucesos” (United Master, 2025), donde las letras de las canciones proceden de poemas del libro de similar título de próxima publicación. Con este gesto Belén pretende abrir una nueva puerta a la Poesía a través de la música. Tanto las voces como las composiciones musicales fueron diseñadas con herramientas de inteligencia artificial. Las voces no son de nadie, pertenecen a la Poesía.
            </p>

            <h3 className="text-2xl font-serif text-ink mt-8 mb-4">¿Qué pienso?</h3>
            <p>
              Escribo desde muy temprana edad. Nunca he mostrado aquellos primeros poemas. Pertenecen al silencio. Defiendo los derechos de humanos, animales y vegetales. Creo que la vida se sostiene sobre la coherencia de nuestras acciones y que no somos dueños ni de la vida ni del planeta donde habitamos. Soy una romántica antigua, apasionada del lenguaje como arma de defensa contra la ignorancia. Me debo a la Poesía, los versos que escribo no me pertenecen. Cuando un poema salta del papel al lector adquiere libertad, identidad, y en algunas ocasiones inmortalidad. A veces, la Poesía traspasa el entendimiento, se infiltra en otros planos de la realidad donde las emociones y el lenguaje tejen ese espacio amable donde descansar la cordura y la razón. La Poesía no hay que entenderla, hay que vivirla. No conozco ningún poeta «auténtico» que no tenga corazón.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-ink/10 flex gap-8">
            <div>
              <span className="block text-4xl font-serif text-deep-red">2</span>
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
        </div>
      </div>
    </section>
  );
};

export default Bio;