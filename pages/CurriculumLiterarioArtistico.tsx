import React from 'react';
import { motion } from 'framer-motion';

const literaryCvSections = [
  {
    title: 'Exposiciones y obra visual',
    items: [
      'Exposición de Pintura Individual: “Rostros”, Universidad de Granada, 1991.',
      'Exposición de Pintura Internacional: Galería “Tabú”, Torres Vedras, Portugal, 1998.',
      'Exposición Colectiva de Poesía Visual: “Poesía para ver”, Madrid, 1999; Barcelona, 2000; Pineda del Mar, 2000; Palencia, 2001; Valladolid, 2002.'
    ]
  },
  {
    title: 'Libros y antologías',
    items: [
      'Libros de poesía: “Destierro en Cuatro Ángulos”, Ed. Devenir, Madrid, 1999; “La Noche de Ayer”, Ed. Alhulia, colección “Palabras Mayores”, 2001.',
      'Participación en Antologías de Poesía: “Aldea Poética II”, de Antonio Pastor. Ed. Opera Prima, Madrid, 2000.',
      '“Versos para fin del Milenio”, de Miguel Ávila Cabeza, Motril (Granada), 2001.',
      '“Plumas femeninas en la Literatura de Granada (siglos VIII-XX). Diccionario-Antología”, de Amelina Correa. Universidad de Granada, 2002.',
      '“Poetas por el Medio Ambiente”, Ayuntamiento de Motril, 2003.',
      '“Poetas por la paz”, Colegio de Gestores Administrativos de Granada, 2002.',
      'Participación en la antología de María Rosal “Con Voz propia”, Ed. Renacimiento, 2007.'
    ]
  },
  {
    title: 'Revistas y edición',
    items: [
      'Colaboración en revistas de literatura nacionales e internacionales: Salina (Univ. de Tarragona), Alhucema (Granada), Letra Clara (Univ. de Granada), Ficciones (Granada), Phayum (Benicarló), Turia (Teruel), Ánfora Nova (Córdoba), Texturas (Vitoria), Al Haraka Al Shiriya (Kaissar Afif, Méjico), Cuadernos del Matemático (Getafe, Madrid), La Ñ literaria (Palencia), Extramuros, entre otras.',
      'Revistas electrónicas: elfantasmadelaglorieta.com (2005), decirdelagua.com (Miami, 2008), etc.',
      'Redactora jefe de la Revista Literaria “Ficciones”, 1997-1999.',
      'Redactora de la Revista Literaria “Alhucema” (Granada), 2002-2007.'
    ]
  },
  {
    title: 'Gestión cultural y traducción',
    items: [
      'Co-directora del programa de radio “La Vuelta de Llave”, 1997.',
      'Coordinadora del programa cultural “Puerta Abierta del Diálogo Internacional”, 2001-2002, Fundación Euroárabe (Granada, España), con participación de poetas de diferentes países árabes.',
      'Traducción de poesía castellano-francés: “Las noches azules del alma”, textos del poeta Enrique Villagrasa. Fundación Euroárabe, 2001.',
      'Ilustraciones del libro “Las noches azules del alma”, Fundación Euroárabe (Granada), 2001.'
    ]
  },
  {
    title: 'Referencias bibliográficas',
    items: [
      'C.J. “Otras voces. Destierro en cuatro ángulos”. El Cultural (Madrid), 26 de diciembre de 1999.',
      'Enrique Villagrasa. “Poesía. Versos del Sur”. Qué Leer. Barcelona, febrero de 1999.',
      'Antonio Enrique. “Un Mandala de Libro” (acerca de “Destierro en cuatro ángulos”). Turia n.º 55, junio de 2000, pp. 354-355. Diputación de Teruel.',
      'Enrique Villagrasa. “Poesía”. Qué Leer. Barcelona, abril de 2002.',
      'Víctor Córcoba. “Andalucía en los libros”. Diario Costa de Granada, 2002.',
      'Yassin Adnan. “La poeta española Belén Juárez”. Revista Al-Sada (Marrakech), octubre de 2002.',
      'Enrique Villagrasa. Extramuros, 2002.',
      'Francisco Gil Craviotto. “La Poesía de Belén Juárez”. Diario Ideal, enero de 2003.',
      'Su poesía ha sido traducida al árabe en la web jehat.com (Bahréin).'
    ]
  },
  {
    title: 'Participaciones y presencia pública',
    items: [
      'Conferencia: divulgación pública de poetas árabes y lecturas de textos dentro del programa “Poesía en Residencia”. Sevilla, 2002.',
      'Debate público “Poetas del Mediterráneo”. Encuentro de poetas libaneses y españoles. Instituto Cervantes. Beirut, 2002.',
      'Participación en el VII y VIII Encuentro de Mujeres Escritoras. Lectura y presentación de escritoras. Granada, 2002; Vitoria, 2005.',
      'Recitales de poesía: “Poetas por la Paz”. Universidad de Granada, 2003.',
      'Recital de poesía y música: lectura de poesía andalusí (siglos XI y XII), junto al Ensemble de Música Antigua “Clamores Antiqui”. Fundación Euroárabe, Granada, febrero de 2003.',
      'Recital de poesía árabe traducida al castellano: El Imperdible, Sevilla, 2003.',
      'Presentación del libro y debate “Canon Heterodoxo” de Antonio Enrique, junto a Gregorio Morales. Fundación Euroárabe, Granada, 2003.',
      'Participación en el Congreso de Escritores Onubenses. Villa del Rocío, 2003.',
      '“Poesía árabe contemporánea”. Cuadernos “La Ñ literaria”, edición y selección. Coordinación de Julián Alonso. Ayuntamiento de Dueñas (Palencia), 2003.',
      'Coordinadora del dossier especial dedicado a los poetas árabes en el número 31 de la revista Extramuros. Conferencia y lectura poética individual en Bahréin. Día Mundial de la Poesía, 2004.',
      'Participación en el congreso “Letras en la ciudad soñada”, dirigido por Gregorio Morales: exposición audiovisual “Música y Poesía” en Los Mundos Imaginarios (Granada, 2006).',
      'Participación en el ciclo de Literatura de Terror: exposición y lectura de poemas de terror, dirigido por Gregorio Morales (Albolote, Granada, 2005).',
      'Miembro del Jurado del Premio Cervantes de Poesía de Armilla (Granada), 2004-2008.'
    ]
  }
];

const recentActivity = [
  {
    year: '2024-2025',
    title: 'Club de Poesía de Librujula',
    detail: 'Publicación de los poemas “Las cerezas de mi padre” (2024) y “Y mi denuncia” (2025) en el Club de Poesía de la revista Librujula, bajo la coordinación de Enrique Villagrasa.'
  },
  {
    year: '2025',
    title: 'Encuentro de Letras Celestes',
    detail: 'Participación en la antología de poesía “Encuentro de Letras Celestes”, Sevilla, 2025, coordinada por Pedro Luis Ibáñez Lérida.'
  },
  {
    year: '2025',
    title: 'Publicación del álbum “Horizonte de Sucesos”',
    detail: 'Publicación del álbum musical titulado “Horizonte de Sucesos” (United Master, 2025). Las letras de las canciones proceden de poemas del libro homónimo.'
  },
  {
    year: '2025',
    title: 'Circle of European Artists',
    detail: 'Su trayectoria literaria y artística ha sido incluida en el Circle of European Artists (París, 2025).'
  },
  {
    year: '2026',
    title: 'Recital “Día de los enamorados”',
    detail: 'Participación en el recital poético colectivo celebrado en el Centro Artístico de Granada el 14 de febrero de 2026, coordinado por Pilar Bueno.'
  },
  {
    year: '2026',
    title: 'Cartografía del Amor',
    detail: 'Participación en el primer recital de microrrelatos celebrado en el Centro Cultural de Montequinto (Dos Hermanas, Sevilla), coordinado por Maritxé Abad y organizado por la Delegación en Sevilla de la Academia Norteamericana de Literatura Moderna Internacional.'
  },
  {
    year: '2025-2026',
    title: 'Horizonte de Sucesos',
    detail: 'Nuevo libro de poesía publicado en la colección Rayo Azul de la editorial Huerga & Fierro, veinticinco años después de la publicación de su último libro.'
  }
];

const recentLiteraryLinks = [
  {
    text: 'Publicación del álbum musical “Horizonte de Sucesos” (United Master, 2025)',
    url: 'https://unitedmasters.com/a/belen-juarez'
  },
  {
    text: 'Vídeo “Lobo”, adaptación visual y musical vinculada a Horizonte de Sucesos',
    url: 'https://www.youtube.com/watch?v=_8J9RL0lp_8'
  },
  {
    text: 'Amazon Music · álbum “Horizonte de Sucesos”',
    url: 'https://music.amazon.es/tracks/B0FT95JC5W'
  },
  {
    text: 'Spotify · álbum “Horizonte de Sucesos”',
    url: 'https://open.spotify.com/intl-es/album/3xQDEU1oeQoWyI6IKsRiWO'
  },
  {
    text: 'Apple Music · álbum “Horizonte de Sucesos”',
    url: 'https://music.apple.com/es/album/horizonte-de-sucesos/1843135219'
  },
  {
    text: 'YouTube · álbum “Horizonte de Sucesos”',
    url: 'https://www.youtube.com/watch?v=gsMr2C_jFGk'
  },
  {
    text: 'Circle of European Artists (París, 2025)',
    url: 'https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/'
  }
];

const CurriculumLiterarioArtistico: React.FC = () => {
  return (
    <section className="bg-paper pt-32 pb-20 text-ink md:pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.5em] mb-4 block">
            Sobre Belén
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-6">
            Currículum literario y artístico
          </h1>
          <p className="max-w-3xl mx-auto font-sans font-light text-ink/70 text-base sm:text-lg leading-relaxed text-justify">
            Relación sintética de exposiciones, libros, colaboraciones editoriales, traducciones, referencias críticas y actividades públicas vinculadas a la trayectoria literaria y artística de Belén Juárez.
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gold/10 bg-white/70 px-7 py-8 md:px-8 md:py-10 shadow-sm"
          >
            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-5">
              Actividades recientes 2024-2026
            </p>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.title} className="border-l border-gold/20 pl-4 md:pl-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-deep-red font-bold">
                      {item.year}
                    </span>
                    <h4 className="font-serif italic text-xl text-ink">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-justify text-ink/75 font-light text-base md:text-lg leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {literaryCvSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="border border-gold/10 bg-white/70 px-7 py-8 md:px-8 md:py-8 shadow-sm"
            >
              <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-5">
                {section.title}
              </p>
              <ul className="space-y-4 text-ink/75 font-light leading-relaxed text-sm md:text-base">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-deep-red/70" />
                    <span className="text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-8 mt-14 md:mt-16 pt-12 border-t border-gold/10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-5">
              Enlaces y plataformas
            </p>
            <ul className="space-y-4">
              {recentLiteraryLinks.map((item) => (
                <li key={item.url} className="border-b border-gold/10 pb-4 last:border-b-0">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 font-sans text-ink/70 hover:text-deep-red transition-colors leading-relaxed"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-deep-red/70" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumLiterarioArtistico;





