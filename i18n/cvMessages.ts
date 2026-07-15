import type { Locale } from './config';

type LiterarySection = {
    title: string;
    items: string[];
};

type RecentActivity = {
    year: string;
    title: string;
    detail: string;
};

type LiteraryLink = {
    text: string;
    url: string;
};

export const LITERARY_CV_UI: Record<Locale, {
    eyebrow: string;
    title: string;
    introduction: string;
    recentActivities: string;
    links: string;
}> = {
    es: {
        eyebrow: 'Sobre Belén',
        title: 'Currículum literario y artístico',
        introduction: 'Relación sintética de exposiciones, libros, colaboraciones editoriales, traducciones, referencias críticas y actividades públicas vinculadas a la trayectoria literaria y artística de Belén Juárez.',
        recentActivities: 'Actividades recientes 2024-2026',
        links: 'Enlaces y plataformas',
    },
    fr: {
        eyebrow: 'À propos de Belén',
        title: 'Curriculum littéraire et artistique',
        introduction: 'Présentation synthétique des expositions, livres, collaborations éditoriales, traductions, références critiques et activités publiques liées au parcours littéraire et artistique de Belén Juárez.',
        recentActivities: 'Activités récentes 2024-2026',
        links: 'Liens et plateformes',
    },
};

const FR_LITERARY_SECTIONS: LiterarySection[] = [
    {
        title: 'Expositions et œuvre visuelle',
        items: [
            'Exposition individuelle de peinture : « Rostros », Université de Grenade, 1991.',
            'Exposition internationale de peinture : galerie « Tabú », Torres Vedras, Portugal, 1998.',
            'Exposition collective de poésie visuelle : « Poesía para ver », Madrid, 1999 ; Barcelone, 2000 ; Pineda del Mar, 2000 ; Palencia, 2001 ; Valladolid, 2002.',
        ],
    },
    {
        title: 'Livres et anthologies',
        items: [
            'Livres de poésie : « Destierro en Cuatro Ángulos », éd. Devenir, Madrid, 1999 ; « La Noche de Ayer », éd. Alhulia, collection « Palabras Mayores », 2001.',
            'Participation aux anthologies de poésie : « Aldea Poética II », d’Antonio Pastor, éd. Opera Prima, Madrid, 2000.',
            '« Versos para fin del Milenio », de Miguel Ávila Cabeza, Motril (Grenade), 2001.',
            '« Plumas femeninas en la Literatura de Granada (siglos VIII-XX). Diccionario-Antología », d’Amelina Correa, Université de Grenade, 2002.',
            '« Poetas por el Medio Ambiente », mairie de Motril, 2003.',
            '« Poetas por la paz », Colegio de Gestores Administrativos de Granada, 2002.',
            'Participation à l’anthologie de María Rosal « Con Voz propia », éd. Renacimiento, 2007.',
        ],
    },
    {
        title: 'Revues et édition',
        items: [
            'Collaborations dans des revues littéraires nationales et internationales : Salina (Université de Tarragone), Alhucema (Grenade), Letra Clara (Université de Grenade), Ficciones (Grenade), Phayum (Benicarló), Turia (Teruel), Ánfora Nova (Cordoue), Texturas (Vitoria), Al Haraka Al Shiriya (Kaissar Afif, Mexique), Cuadernos del Matemático (Getafe, Madrid), La Ñ literaria (Palencia), Extramuros, entre autres.',
            'Revues électroniques : elfantasmadelaglorieta.com (2005), decirdelagua.com (Miami, 2008), etc.',
            'Rédactrice en chef de la revue littéraire « Ficciones », 1997-1999.',
            'Rédactrice de la revue littéraire « Alhucema » (Grenade), 2002-2007.',
        ],
    },
    {
        title: 'Médiation culturelle et traduction',
        items: [
            'Codirectrice de l’émission radiophonique « La Vuelta de Llave », avec Mariola Cantarero et Ana Isabel López-Siles, 1997. Émission consacrée aux entretiens avec des poètes grenadins et aux lectures poétiques.',
            'Coordinatrice du programme culturel « Puerta Abierta del Diálogo Internacional », 2001-2002, Fondation Euroarabe (Grenade, Espagne), avec la participation de poètes de différents pays arabes.',
            'Traduction de poésie de l’espagnol au français : « Las noches azules del alma », textes du poète Enrique Villagrasa, Fondation Euroarabe, 2001.',
            'Illustrations du livre « Las noches azules del alma », Fondation Euroarabe (Grenade), 2001.',
        ],
    },
    {
        title: 'Références bibliographiques',
        items: [
            'C.J. « Otras voces. Destierro en cuatro ángulos ». El Cultural (Madrid), 26 décembre 1999.',
            'Enrique Villagrasa. « Poesía. Versos del Sur ». Qué Leer, Barcelone, février 1999.',
            'Antonio Enrique. « Un Mandala de Libro » (à propos de « Destierro en cuatro ángulos »). Turia, no 55, juin 2000, p. 354-355. Diputación de Teruel.',
            'Enrique Villagrasa. « Poesía ». Qué Leer, Barcelone, avril 2002.',
            'Víctor Córcoba. « Andalucía en los libros ». Diario Costa de Granada, 2002.',
            'Yassin Adnan. « La poeta española Belén Juárez ». Revista Al-Sada (Marrakech), octobre 2002.',
            'Enrique Villagrasa. Extramuros, 2002.',
            'Francisco Gil Craviotto. « La Poesía de Belén Juárez ». Diario Ideal, janvier 2003.',
            'Sa poésie a été traduite en arabe sur le site jehat.com (Bahreïn).',
        ],
    },
    {
        title: 'Participations et présence publique',
        items: [
            'Conférence : diffusion publique de poètes arabes et lectures de textes dans le cadre du programme « Poesía en Residencia ». Séville, 2002.',
            'Débat public « Poetas del Mediterráneo ». Rencontre de poètes libanais et espagnols. Institut Cervantes, Beyrouth, 2002.',
            'Participation aux VIIe et VIIIe Rencontres de femmes écrivaines : lecture et présentation d’écrivaines. Grenade, 2002 ; Vitoria, 2005.',
            'Récitals de poésie : « Poetas por la Paz ». Université de Grenade, 2003.',
            'Récital de poésie et musique : lecture de poésie andalouse des XIe et XIIe siècles, avec l’Ensemble de musique ancienne « Clamores Antiqui ». Fondation Euroarabe, Grenade, février 2003.',
            'Récital de poésie arabe traduite en espagnol : El Imperdible, Séville, 2003.',
            'Présentation et débat autour du livre « Canon Heterodoxo » d’Antonio Enrique, avec Gregorio Morales. Fondation Euroarabe, Grenade, 2003.',
            'Participation au Congrès des écrivains de Huelva. Villa del Rocío, 2003.',
            '« Poesía árabe contemporánea ». Cuadernos « La Ñ literaria », édition et sélection ; coordination de Julián Alonso. Mairie de Dueñas (Palencia), 2003.',
            'Coordinatrice du dossier spécial consacré aux poètes arabes dans le numéro 31 de la revue Extramuros. Conférence et lecture poétique individuelle à Bahreïn. Journée mondiale de la poésie, 2004.',
            'Participation au congrès « Letras en la ciudad soñada », dirigé par Gregorio Morales : exposition audiovisuelle « Música y Poesía » à Los Mundos Imaginarios (Grenade, 2006).',
            'Participation au cycle de littérature d’horreur : exposition et lecture de poèmes d’horreur, dirigé par Gregorio Morales (Albolote, Grenade, 2005).',
            'Membre du jury du Prix Cervantes de poésie d’Armilla (Grenade), 2004-2008.',
        ],
    },
];

const FR_RECENT_LITERARY_ACTIVITY: RecentActivity[] = [
    { year: '2024-2025', title: 'Club de Poesía de Librujula', detail: 'Publication des poèmes « Las cerezas de mi padre » (2024) et « Y mi denuncia » (2025) dans le Club de Poesía de la revue Librujula, sous la coordination d’Enrique Villagrasa.' },
    { year: '2025-2026', title: 'Encuentro de Letras Celestes', detail: 'Participation aux deux dernières anthologies de poésie du projet « Encuentro de Letras Celestes », Séville, 2025 et 2026, de Pedro Luis Ibáñez Lérida et Diego Castillo Barco.' },
    { year: '2025', title: 'Publication de l’album « Horizonte de Sucesos »', detail: 'Publication de l’album musical « Horizonte de Sucesos » (United Master, 2025). Les paroles des chansons sont issues de poèmes du livre homonyme.' },
    { year: '2025', title: 'Circle of European Artists', detail: 'Son parcours littéraire et artistique a été inclus dans le Circle of European Artists (Paris, 2025).' },
    { year: '2026', title: 'Récital « Día de los enamorados »', detail: 'Participation au récital poétique collectif organisé au Centro Artístico de Granada le 14 février 2026, sous la coordination de Pilar Bueno.' },
    { year: '2026', title: 'Cartografía del Amor', detail: 'Participation au premier récital de micro-récits organisé au Centro Cultural de Montequinto (Dos Hermanas, Séville), sous la coordination de Maritxé Abad et organisé par la délégation de Séville de l’Academia Norteamericana de Literatura Moderna Internacional.' },
    { year: '2026', title: 'Horizonte de Sucesos', detail: 'Nouveau livre de poésie publié dans la collection Rayo Azul des éditions Huerga & Fierro. Présentation à la Biblioteca de Andalucía le 21 mai, avec la participation du pianiste et compositeur Eduardo Salas Arques, des éditeurs Antonio Huerga et Charo Fierro, ainsi que des écrivains Antonio Fernández Juárez et Maritxé Abad i Bueno.' },
];

const FR_RECENT_LITERARY_LINKS: LiteraryLink[] = [
    { text: 'Publication de l’album musical « Horizonte de Sucesos » (United Master, 2025)', url: 'https://unitedmasters.com/a/belen-juarez' },
    { text: 'Vidéo « Lobo », adaptation visuelle et musicale liée à Horizonte de Sucesos', url: 'https://www.youtube.com/watch?v=_8J9RL0lp_8' },
    { text: 'Amazon Music · album « Horizonte de Sucesos »', url: 'https://music.amazon.es/tracks/B0FT95JC5W' },
    { text: 'Spotify · album « Horizonte de Sucesos »', url: 'https://open.spotify.com/intl-es/album/3xQDEU1oeQoWyI6IKsRiWO' },
    { text: 'Apple Music · album « Horizonte de Sucesos »', url: 'https://music.apple.com/es/album/horizonte-de-sucesos/1843135219' },
    { text: 'YouTube · album « Horizonte de Sucesos »', url: 'https://www.youtube.com/watch?v=gsMr2C_jFGk' },
    { text: 'Circle of European Artists (Paris, 2025)', url: 'https://www.cercledesartisteseuropeens.com/partenariats-et-sponsors-dans-l-art-et-la-culture/artistes-d-exception-rencontr%C3%A9s-au-fil-de-nos-%C3%A9v%C3%A9nements/' },
];

export const localizeLiteraryCv = (
    locale: Locale,
    sections: LiterarySection[],
    activity: RecentActivity[],
    links: LiteraryLink[],
) => (
    locale === 'fr'
        ? { sections: FR_LITERARY_SECTIONS, activity: FR_RECENT_LITERARY_ACTIVITY, links: FR_RECENT_LITERARY_LINKS }
        : { sections, activity, links }
);

export const SCIENTIFIC_CV_UI: Record<Locale, Record<string, string>> = {
    es: {
        eyebrow: 'Actividad académica e investigadora', title: 'C.V.A. Científico', introduction: 'Síntesis del currículum científico de Belén Juárez, centrado en docencia universitaria, microbiología ambiental, producción científica, liderazgo investigador y dirección académica.', identifiers: 'Identificadores', formation: 'Formación y trayectoria', stays: 'Estancias en otros centros', production: 'Producción científica', leadership: 'Proyectos y liderazgo', merits: 'Otros méritos', outreach: 'Conferencias de divulgación', meetings: 'Reuniones internacionales', seminars: 'Seminarios y actos científicos', coordination: 'Organización y coordinación', distinctions: 'Reconocimientos y evaluación', articles: 'Artículos científicos', publicationsSelection: 'Selección de publicaciones', congresses: 'Congresos', recentContributions: 'Aportaciones recientes', projects: 'Proyectos de investigación', featuredSelection: 'Selección destacada', duration: 'Duración', principalInvestigator: 'IP',
    },
    fr: {
        eyebrow: 'Activité académique et de recherche', title: 'C.V.A. scientifique', introduction: 'Synthèse du curriculum scientifique de Belén Juárez, consacré à l’enseignement universitaire, à la microbiologie environnementale, à la production scientifique, au pilotage de la recherche et à la direction académique.', identifiers: 'Identifiants', formation: 'Formation et parcours', stays: 'Séjours dans d’autres centres', production: 'Production scientifique', leadership: 'Projets et direction scientifique', merits: 'Autres mérites', outreach: 'Conférences de vulgarisation', meetings: 'Rencontres internationales', seminars: 'Séminaires et manifestations scientifiques', coordination: 'Organisation et coordination', distinctions: 'Distinctions et évaluation', articles: 'Articles scientifiques', publicationsSelection: 'Sélection de publications', congresses: 'Congrès', recentContributions: 'Contributions récentes', projects: 'Projets de recherche', featuredSelection: 'Sélection mise en avant', duration: 'Durée', principalInvestigator: 'IP',
    },
};

const FR_SCIENTIFIC_TEXTS: Record<string, string> = {
    'Horas de docencia': 'Heures d’enseignement',
    Quinquenios: 'Quinquennats d’enseignement',
    'Sexenios CNEAI': 'Périodes CNEAI de recherche',
    'Tramos autonómicos': 'Évaluations régionales',
    Publicaciones: 'Publications',
    'Índice H': 'Indice H',
    'Citas recibidas': 'Citations reçues',
    'Tesis dirigidas': 'Thèses dirigées',
    'M.J. Belén Juárez Jiménez obtuvo el Grado de Doctora por la Universidad de Granada (UGR) en 2002 y el de Especialista en Análisis Clínicos por la UGR y MEC en 1994. Actualmente, es Profesora Titular de Universidad adscrita al Departamento de Microbiología, sección Farmacia de la UGR desde 2019; Además, es coordinadora del Módulo de Bacteriología del Máter Universitario Análisis Biológico y Diagnóstico de Laboratorio.': 'M.J. Belén Juárez Jiménez a obtenu le doctorat à l’Université de Grenade (UGR) en 2002 et le titre de spécialiste en analyses cliniques de l’UGR et du MEC en 1994. Elle est actuellement professeure titulaire rattachée au département de microbiologie, section Pharmacie, de l’UGR depuis 2019. Elle est également coordinatrice du module de bactériologie du master universitaire en analyse biologique et diagnostic de laboratoire.',
    'Actualmente imparte docencia en el Grado en Farmacia y en dos Másteres oficiales de postgrado de la UGR, con más de 2.500 horas impartidas. Tiene reconocidos 4 quinquenios docentes, 3 sexenios de investigación CNEAI, con último sexenio reconocido en el periodo 2015-2020, y 5 tramos autonómicos reconocidos en 2019.': 'Elle enseigne actuellement dans le diplôme de pharmacie et dans deux masters officiels de troisième cycle de l’UGR, pour un total de plus de 2 500 heures d’enseignement. Elle compte 4 quinquennats d’enseignement reconnus, 3 périodes de recherche CNEAI, dont la dernière reconnue pour 2015-2020, et 5 évaluations régionales reconnues en 2019.',
    'Durante la tesis doctoral disfrutó de 54 meses de becas predoctorales homologadas, obtenidas en convocatoria pública competitiva, adscritas al Proyecto Europeo Cleanner, Controlled and Cost-Efficient Olive Production (COOP), centrado en el estudio y biodepuración de efluentes industriales, y al Proyecto Nacional MEC sobre sistemas de bajo costo para el tratamiento de efluentes industriales con alta carga de compuestos nitrogenados.': 'Au cours de sa thèse de doctorat, elle a bénéficié de 54 mois de bourses prédoctorales homologuées, obtenues par appel public concurrentiel, rattachées au projet européen Cleanner, Controlled and Cost-Efficient Olive Production (COOP), consacré à l’étude et à la biodépollution d’effluents industriels, ainsi qu’à un projet national du MEC sur des systèmes à faible coût de traitement d’effluents industriels à forte charge en composés azotés.',
    'En la etapa postdoctoral obtuvo una beca del Plan Propio de la UGR (2004-2006), también en convocatoria pública competitiva, para trabajar en el Dipartimento di Agrobiologia ed Agrochimica della Universita degli Studi della Tuscia, en Viterbo, Italia, sobre actividades enzimáticas de bacterias marinas. En 2006 fue miembro investigador por la parte italiana de una Acción Integrada España-Italia.': 'Au cours de sa période postdoctorale, elle a obtenu une bourse du Plan Propio de l’UGR (2004-2006), également par appel public concurrentiel, afin de travailler au Dipartimento di Agrobiologia ed Agrochimica della Universita degli Studi della Tuscia, à Viterbo, en Italie, sur les activités enzymatiques de bactéries marines. En 2006, elle a été membre de l’équipe de recherche italienne d’une Action intégrée Espagne-Italie.',
    'Entre 2008 y 2012 obtuvo un Contrato de Reincorporación de Doctores del Plan Propio de la UGR. Entre 2012 y 2019 fue Profesora Contratada Doctora en la misma universidad, antes de su actual etapa como Profesora Titular.': 'Entre 2008 et 2012, elle a obtenu un contrat de réintégration de docteurs du Plan Propio de l’UGR. Entre 2012 et 2019, elle a été professeure contractuelle titulaire dans la même université, avant son poste actuel de professeure titulaire.',
    'Su producción científica reúne 44 publicaciones indexadas. De estas, 24 pertenecen al primer cuartil (Q1, 54,5%), 8 al segundo (Q2, 15,9%), 3 al tercero (Q3, 6,8%) y 4 al cuarto (Q4, 9,1%).': 'Sa production scientifique comprend 44 publications indexées. Parmi elles, 24 relèvent du premier quartile (Q1, 54,5 %), 8 du deuxième (Q2, 15,9 %), 3 du troisième (Q3, 6,8 %) et 4 du quatrième (Q4, 9,1 %).',
    'Ha recibido más de 1300 citas y presenta un índice H de 20. A ello se suman 3 capítulos de libro, diversas publicaciones en revistas no indexadas y 20 participaciones en congresos nacionales e internacionales.': 'Elle a reçu plus de 1 300 citations et présente un indice H de 20. S’y ajoutent 3 chapitres d’ouvrage, diverses publications dans des revues non indexées et 20 participations à des congrès nationaux et internationaux.',
    'Ha participado en 16 proyectos nacionales, autonómicos e internacionales y en 4 contratos con empresas. Fue Investigadora Principal (IP2) de un proyecto nacional MINECO durante el periodo 2018-2020 y ha participado además en una Acción Integrada España-Italia en 2006.': 'Elle a participé à 16 projets nationaux, régionaux et internationaux, ainsi qu’à 4 contrats avec des entreprises. Elle a été investigatrice principale (IP2) d’un projet national MINECO entre 2018 et 2020 et a également participé à une Action intégrée Espagne-Italie en 2006.',
    'Actualmente forma parte de dos proyectos en curso del Plan Nacional de Investigación financiados por el Ministerio de Ciencia e Innovación.': 'Elle participe actuellement à deux projets en cours du Plan national de recherche financés par le ministère de la Science et de l’Innovation.',
    'Ha dirigido 4 tesis doctorales y ha sido tutora de 6 Trabajos Fin de Máster defendidos en 2009, 2017, 2024 y 2026, además de diversos Trabajos Fin de Grado (los dos últimos en 2026).': 'Elle a dirigé 4 thèses de doctorat et encadré 6 mémoires de master soutenus en 2009, 2017, 2024 et 2026, ainsi que divers travaux de fin d’études de licence, dont les deux derniers en 2026.',
    'Es revisora de Microbial Cell Factories y Polar Biology, evaluadora externa de un proyecto de investigación en la Universidad Tecnológica Metropolitana del Estado de Chile en 2024, y miembro del Grupo de Investigación de Microbiología Ambiental (RMN 270, PAI) desde 1997.': 'Elle est évaluatrice pour Microbial Cell Factories et Polar Biology, évaluatrice externe d’un projet de recherche à l’Universidad Tecnológica Metropolitana del Estado de Chile en 2024, et membre du groupe de recherche en microbiologie environnementale (RMN 270, PAI) depuis 1997.',
    'Forma parte del Consejo del Instituto de Investigación del Agua de la UGR, y es miembro del equipo editorial de la revista científica Ars Pharmaceutica, editada en la Facultad de Farmacia de la UGR y donde coordina la sección de Microbiología Clínica.': 'Elle fait partie du conseil de l’Instituto de Investigación del Agua de l’UGR et du comité éditorial de la revue scientifique Ars Pharmaceutica, publiée par la faculté de pharmacie de l’UGR, où elle coordonne la section de microbiologie clinique.',
    'Ha sido miembro de la Sociedad Española de Microbiología hasta 2025, del Comité Científico del Congreso Internacional BioRemid2017, y ha formado parte de 9 tribunales de Tesis Doctorales con mención internacional entre 2012 y 2026 en las universidades de Granada y Almería. Último Tribunal de Tesis doctoral: Facultad de Ciencias, Universidad de Granada (abril, 2026).': 'Elle a été membre de la Sociedad Española de Microbiología jusqu’en 2025 et du comité scientifique du congrès international BioRemid2017. Elle a siégé dans 9 jurys de thèse de doctorat avec mention internationale entre 2012 et 2026, aux universités de Grenade et d’Almería. Dernier jury de thèse : faculté des sciences, Université de Grenade, avril 2026.',
    '12 meses': '12 mois',
    'Analista en prácticas de la Especialidad de Análisis Clínicos cursada': 'Analyste stagiaire dans le cadre de la spécialité d’analyses cliniques suivie',
    'Estudio y Análisis de los efectos del alpechín': 'Étude et analyse des effets des margines',
    'Aula de Pensamiento y Opinión <A-riat>. Área de Cultura. Ayuntamiento de Arriate': 'Aula de Pensamiento y Opinión <A-riat>. Service culturel de la mairie d’Arriate',
    'Cromatografía de gases y espectrometría de masas': 'Chromatographie en phase gazeuse et spectrométrie de masse',
    'Curso Técnicas de Biotratamiento Aplicadas a la Reutilización y Reciclado de Residuos (código FO/0102), Fundación Empresa-Universidad de Granada': 'Cours « Técnicas de Biotratamiento Aplicadas a la Reutilización y Reciclado de Residuos » (code FO/0102), Fundación Empresa-Universidad de Granada',
    'Dirigido a alumnado de licenciaturas de ciencias experimentales; curso reconocido académicamente como créditos de libre configuración': 'Destiné aux étudiants des diplômes en sciences expérimentales ; cours reconnu académiquement au titre de crédits optionnels.',
    'Indicadores biológicos de contaminación de aguas': 'Indicateurs biologiques de la contamination des eaux',
    'Aula Permanente de Formación Abierta del Curso Académico 2010-11, Facultad de Ciencias, Universidad de Granada': 'Aula Permanente de Formación Abierta de l’année universitaire 2010-2011, faculté des sciences, Université de Grenade',
    'Dirigido a alumnado asistente al aula de mayores': 'Destiné aux étudiants participants au programme universitaire pour seniors.',
    'Enfermedades infecciosas relacionadas con el consumo y uso de agua': 'Maladies infectieuses liées à la consommation et à l’usage de l’eau',
    'Ciencia y Sociedad: Proyecto de Fomento de la Cultura Científica en la Ciudadanía. Facultad de Ciencias de la Universidad de Granada y Diputación de Granada': 'Science et société : projet de promotion de la culture scientifique auprès des citoyens. Faculté des sciences de l’Université de Grenade et Diputación de Granada',
    '2 horas': '2 heures',
    'Asistencia como ponente y defensa de los resultados del proyecto COOP': 'Participation comme intervenante et présentation des résultats du projet COOP',
    'Asistencia como ponente y defensa de los resultados del proyecto MEDUSA WATER': 'Participation comme intervenante et présentation des résultats du projet MEDUSA WATER',
    'Asistencia a las reuniones internacionales del proyecto "Biotechnological recycle of olive mills washing water by microalgae"': 'Participation aux réunions internationales du projet « Biotechnological recycle of olive mills washing water by microalgae »',
    'Proyecto internacional': 'Projet international',
    'Seminario: "Es el momento...". Técnicas y avances de GC/MS': 'Séminaire : « Es el momento... ». Techniques et avancées en GC/MS',
    'Convenios científicos': 'Accords scientifiques',
    'Asistencia y participación en el 5º Meeting Grundtvig': 'Participation à la 5e réunion Grundtvig',
    'Water Saving-Manking Saving. UE-Asociaciones de Aprendizaje Grundtvig. Ref: 2008-1-ES1-GRU06-0246. Conferenciante-colaborador': 'Water Saving-Manking Saving. UE-Partenariats d’apprentissage Grundtvig. Réf. : 2008-1-ES1-GRU06-0246. Conférencière collaboratrice',
    'Organización y Coordinación de un Ciclo de Conferencias para la Difusión del Conocimiento Científico': 'Organisation et coordination d’un cycle de conférences pour la diffusion des connaissances scientifiques',
    'Instituto del Agua, Universidad de Granada': 'Instituto del Agua, Université de Grenade',
    'Participación de 23 científicos y profesores de la UGR y CSIC de Granada. Idioma: inglés.': 'Participation de 23 scientifiques et enseignants de l’UGR et du CSIC de Grenade. Langue : anglais.',
    'Premio de Investigación': 'Prix de recherche',
    'Primer Premio de Investigación de la Asociación Vicente Callao': 'Premier prix de recherche de l’Asociación Vicente Callao',
    'Por el trabajo titulado "Actividad antimicrobiana del alpechín".': 'Pour le travail intitulé « Actividad antimicrobiana del alpechín ».',
    'Miembro del Banco de Expertos': 'Membre de la banque d’experts',
    'Revisión científica': 'Évaluation scientifique',
    'Revisora de revistas científicas': 'Évaluatrice de revues scientifiques',
    'Entidad acreditante: Agencia Estatal de Investigación.': 'Organisme certificateur : Agencia Estatal de Investigación.',
    'Revisora de la revista Microbial Cell Factories.': 'Évaluatrice de la revue Microbial Cell Factories.',
    Póster: 'Poster',
    'Comunicación oral': 'Communication orale',
    'Cultivo y aislamiento de microalgas de la Laguna de la Caldera, situada en el Parque Nacional Sierra Nevada (Granada)': 'Culture et isolement de microalgues de la Laguna de la Caldera, située dans le parc national de Sierra Nevada (Grenade)',
    'Efecto de la salinidad en las actividades enzimáticas microbianas en un sistema aerobio de lecho sumergido para el tratamiento de agua residual urbana con salinidad variable': 'Effet de la salinité sur les activités enzymatiques microbiennes dans un système aérobie à lit immergé pour le traitement d’eaux usées urbaines à salinité variable',
    'Estudio de las actividades enzimáticas en biorreactores de membrana (MBR) para el tratamiento de aguas residuales. Aplicación de oxígeno puro como variable de proceso': 'Étude des activités enzymatiques dans des bioréacteurs à membrane (MBR) pour le traitement des eaux usées. Application de l’oxygène pur comme variable de procédé',
    'La diversidad microbiana en tecnologías de biopelículas aplicadas al tratamiento de aguas residuales': 'La diversité microbienne dans les technologies de biofilms appliquées au traitement des eaux usées',
    'Universidad de Granada y Sociedad Española de Microbiología': 'Université de Grenade et Sociedad Española de Microbiología',
    'Sociedad Española de Microbiología': 'Sociedad Española de Microbiología',
    'Consejo Superior de Investigaciones Científicas (CSIC) y Universidad de Granada': 'Consejo Superior de Investigaciones Científicas (CSIC) et Université de Grenade',
    'Optimización del compostaje de lodos de depuradoras a escala real para la eliminación de contaminantes emergentes y la obtención de enmiendas bioseguras': 'Optimisation à l’échelle réelle du compostage de boues d’épuration pour l’élimination de contaminants émergents et l’obtention d’amendements sûrs',
    'Junta de Andalucía. Consejería de Economía, Conocimiento, Empresas y Universidad, Fondos FEDER': 'Junta de Andalucía. Consejería de Economía, Conocimiento, Empresas y Universidad, fonds FEDER',
    '2020-actualidad': '2020-aujourd’hui',
    'Desentrañando las poblaciones microbianas claves involucradas en la producción de compuestos de almacenamiento de valor añadido (PHAs y/o TAGs) a partir de residuos lipídicos': 'Identification des populations microbiennes clés impliquées dans la production de composés de stockage à valeur ajoutée (PHA et/ou TAG) à partir de résidus lipidiques',
    'Ministerio de Ciencia e Innovación': 'Ministère de la Science et de l’Innovation',
    'Proyecto concedido en convocatoria de 2020-actualidad': 'Projet attribué dans le cadre de l’appel 2020-aujourd’hui',
    'Explorando el uso de bioinoculantes microbianos sociales para mitigar el estrés del cambio climático en el crecimiento vegetal': 'Exploration de l’utilisation de bio-inoculants microbiens sociaux pour atténuer le stress du changement climatique sur la croissance végétale',
    'Programa Estatal de Investigación, Desarrollo e Innovación Orientada a los Retos de la Sociedad, MINECO': 'Programme national de recherche, développement et innovation orienté vers les défis sociétaux, MINECO',
    'Tratamiento de agua residual urbana con salinidad variable en biorreactores de membrana sumergida con y sin lecho en suspensión': 'Traitement d’eaux usées urbaines à salinité variable dans des bioréacteurs à membrane immergée avec et sans lit en suspension',
    'Ministerio de Economía y Competitividad': 'Ministère de l’Économie et de la Compétitivité',
    'Miembro de equipo': 'Membre de l’équipe',
    'Análisis químicos y de biodiversidad microbiana de las aguas tratadas en un biorreactor de membrana sumergida. Colaboración con otros miembros del equipo en los ensayos.': 'Analyses chimiques et de biodiversité microbienne des eaux traitées dans un bioréacteur à membrane immergée. Collaboration avec les autres membres de l’équipe lors des essais.',
    'Evolución de contaminantes orgánicos en suelos enmendados con lodos o compost procedentes de EDAR, implicaciones ambientales': 'Évolution des contaminants organiques dans des sols amendés avec des boues ou du compost provenant de stations d’épuration : implications environnementales',
    'Mi aportación consistió en la dirección y supervisión de la parte microbiológica de una tesis doctoral realizada en colaboración con el Departamento de Química Analítica.': 'Ma contribution a consisté à diriger et superviser la partie microbiologique d’une thèse de doctorat menée en collaboration avec le département de chimie analytique.',
    'Actualidad': 'Aujourd’hui',
    'Enero 2002': 'Janvier 2002',
    'Enero 2011 - Enero 2012': 'Janvier 2011 - janvier 2012',
    España: 'Espagne',
    'Génova, Italia': 'Gênes, Italie',
    'Lisboa, Portugal': 'Lisbonne, Portugal',
    'Madrid, España': 'Madrid, Espagne',
    'Alcalá la Real (Jaén)': 'Alcalá la Real (Jaén)',
    'Citas: 15': 'Citations : 15', 'Citas: 4': 'Citations : 4', 'Citas: 6': 'Citations : 6', 'Citas: 17': 'Citations : 17', 'Citas: 12': 'Citations : 12',
};

export const localizeScientificText = (text: string, locale: Locale): string => (
    locale === 'fr' ? FR_SCIENTIFIC_TEXTS[text] ?? text : text
);
