import React from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { SCIENTIFIC_CV_UI, localizeScientificText } from '../i18n/cvMessages';

const metrics = [
    { label: 'Horas de docencia', value: '+2.500' },
    { label: 'Quinquenios', value: '5' },
    { label: 'Sexenios CNEAI', value: '3' },
    { label: 'Tramos autonómicos', value: '5' },
    { label: 'Publicaciones', value: '44' },
    { label: 'Índice H', value: '20' },
    { label: 'Citas recibidas', value: '+1300' },
    { label: 'Tesis dirigidas', value: '4' },
];

const formationParagraphs = [
    'M.J. Belén Juárez Jiménez obtuvo el Grado de Doctora por la Universidad de Granada (UGR) en 2002 y el de Especialista en Análisis Clínicos por la UGR y MEC en 1994. Actualmente, es Profesora Titular de Universidad adscrita al Departamento de Microbiología, sección Farmacia de la UGR desde 2019; Además, es coordinadora del Módulo de Bacteriología del Máter Universitario Análisis Biológico y Diagnóstico de Laboratorio.',
    'Actualmente imparte docencia en el Grado en Farmacia y en dos Másteres oficiales de postgrado de la UGR, con más de 2.500 horas impartidas. Tiene reconocidos 4 quinquenios docentes, 3 sexenios de investigación CNEAI, con último sexenio reconocido en el periodo 2015-2020, y 5 tramos autonómicos reconocidos en 2019.',
    'Durante la tesis doctoral disfrutó de 54 meses de becas predoctorales homologadas, obtenidas en convocatoria pública competitiva, adscritas al Proyecto Europeo Cleanner, Controlled and Cost-Efficient Olive Production (COOP), centrado en el estudio y biodepuración de efluentes industriales, y al Proyecto Nacional MEC sobre sistemas de bajo costo para el tratamiento de efluentes industriales con alta carga de compuestos nitrogenados.',
    'En la etapa postdoctoral obtuvo una beca del Plan Propio de la UGR (2004-2006), también en convocatoria pública competitiva, para trabajar en el Dipartimento di Agrobiologia ed Agrochimica della Universita degli Studi della Tuscia, en Viterbo, Italia, sobre actividades enzimáticas de bacterias marinas. En 2006 fue miembro investigador por la parte italiana de una Acción Integrada España-Italia.',
    'Entre 2008 y 2012 obtuvo un Contrato de Reincorporación de Doctores del Plan Propio de la UGR. Entre 2012 y 2019 fue Profesora Contratada Doctora en la misma universidad, antes de su actual etapa como Profesora Titular.'
];

const productionParagraphs = [
    'Su producción científica reúne 44 publicaciones indexadas. De estas, 24 pertenecen al primer cuartil (Q1, 54,5%), 8 al segundo (Q2, 15,9%), 3 al tercero (Q3, 6,8%) y 4 al cuarto (Q4, 9,1%).',
    'Ha recibido más de 1300 citas y presenta un índice H de 20. A ello se suman 3 capítulos de libro, diversas publicaciones en revistas no indexadas y 20 participaciones en congresos nacionales e internacionales.'
];

const leadershipParagraphs = [
    'Ha participado en 16 proyectos nacionales, autonómicos e internacionales y en 4 contratos con empresas. Fue Investigadora Principal (IP2) de un proyecto nacional MINECO durante el periodo 2018-2020 y ha participado además en una Acción Integrada España-Italia en 2006.',
    'Actualmente forma parte de dos proyectos en curso del Plan Nacional de Investigación financiados por el Ministerio de Ciencia e Innovación.'
];

const meritsParagraphs = [
    'Ha dirigido 4 tesis doctorales y ha sido tutora de 6 Trabajos Fin de Máster defendidos en 2009, 2017, 2024 y 2026, además de diversos Trabajos Fin de Grado (los dos últimos en 2026).',
    'Es revisora de Microbial Cell Factories y Polar Biology, evaluadora externa de un proyecto de investigación en la Universidad Tecnológica Metropolitana del Estado de Chile en 2024, y miembro del Grupo de Investigación de Microbiología Ambiental (RMN 270, PAI) desde 1997.',
    'Forma parte del Consejo del Instituto de Investigación del Agua de la UGR, y es miembro del equipo editorial de la revista científica Ars Pharmaceutica, editada en la Facultad de Farmacia de la UGR y donde coordina la sección de Microbiología Clínica.',
    'Ha sido miembro de la Sociedad Española de Microbiología hasta 2025, del Comité Científico del Congreso Internacional BioRemid2017, y ha formado parte de 9 tribunales de Tesis Doctorales con mención internacional entre 2012 y 2026 en las universidades de Granada y Almería. Último Tribunal de Tesis doctoral: Facultad de Ciencias, Universidad de Granada (abril, 2026).'
];


const professionalStays = [
    {
        institution: 'Servicio Andaluz de Salud (SAS)',
        location: 'Alcalá la Real (Jaén)',
        duration: '12 meses',
        dates: '01/10/1993 - 30/09/1994',
        role: 'Analista en prácticas de la Especialidad de Análisis Clínicos cursada',
    },
];

const outreachLectures = [
    {
        title: 'Estudio y Análisis de los efectos del alpechín',
        context: 'Aula de Pensamiento y Opinión <A-riat>. Área de Cultura. Ayuntamiento de Arriate',
        date: 'Enero 2002',
    },
    {
        title: 'Cromatografía de gases y espectrometría de masas',
        context: 'Curso Técnicas de Biotratamiento Aplicadas a la Reutilización y Reciclado de Residuos (código FO/0102), Fundación Empresa-Universidad de Granada',
        audience: 'Dirigido a alumnado de licenciaturas de ciencias experimentales; curso reconocido académicamente como créditos de libre configuración',
        date: '04/03/2002, 03/03/2003, 02/03/2004 y 01/03/2005',
    },
    {
        title: 'Indicadores biológicos de contaminación de aguas',
        context: 'Aula Permanente de Formación Abierta del Curso Académico 2010-11, Facultad de Ciencias, Universidad de Granada',
        audience: 'Dirigido a alumnado asistente al aula de mayores',
        date: '05/04/2011',
    },
    {
        title: 'Enfermedades infecciosas relacionadas con el consumo y uso de agua',
        context: 'Ciencia y Sociedad: Proyecto de Fomento de la Cultura Científica en la Ciudadanía. Facultad de Ciencias de la Universidad de Granada y Diputación de Granada',
        location: 'Alhendín (Granada)',
        date: '15/12/2010',
        duration: '2 horas',
    },
];

const internationalMeetings = [
    {
        year: '1998',
        title: 'Asistencia como ponente y defensa de los resultados del proyecto COOP',
        location: 'Génova, Italia',
    },
    {
        year: '2000',
        title: 'Asistencia como ponente y defensa de los resultados del proyecto MEDUSA WATER',
        location: 'Lisboa, Portugal',
    },
    {
        year: 'Actualidad',
        title: 'Asistencia a las reuniones internacionales del proyecto "Biotechnological recycle of olive mills washing water by microalgae"',
        location: 'Proyecto internacional',
    },
];

const seminarActivities = [
    {
        year: '1997',
        title: 'Seminario: "Es el momento...". Técnicas y avances de GC/MS',
        context: 'Hewlett Packard, S.A.',
        location: 'Madrid',
    },
    {
        year: '2005',
        title: 'Reunión "Le Biotecnologie nella depurazione delle acque: applicazione e nuove problematiche"',
        context: 'Convenios científicos',
        location: 'Viterbo / Montefiascone, 28-29 de septiembre de 2005',
    },
    {
        year: '2009',
        title: 'Asistencia y participación en el 5º Meeting Grundtvig',
        context: 'Water Saving-Manking Saving. UE-Asociaciones de Aprendizaje Grundtvig. Ref: 2008-1-ES1-GRU06-0246. Conferenciante-colaborador',
        location: 'Universidad de Corse Pasquale Paoli (Francia), 6-9 de abril de 2009',
    },
];

const coordinationActivities = [
    {
        title: 'Organización y Coordinación de un Ciclo de Conferencias para la Difusión del Conocimiento Científico',
        institution: 'Instituto del Agua, Universidad de Granada',
        date: 'Enero 2011 - Enero 2012',
        details: 'Participación de 23 científicos y profesores de la UGR y CSIC de Granada. Idioma: inglés.',
    },
];

const distinctions = [
    {
        type: 'Premio de Investigación',
        title: 'Primer Premio de Investigación de la Asociación Vicente Callao',
        year: '1992',
        location: 'Murcia',
        details: 'Por el trabajo titulado "Actividad antimicrobiana del alpechín".',
    },
    {
        type: 'Miembro del Banco de Expertos',
        title: 'Agencia Estatal de Investigación. Ministerio de Ciencia e Innovación',
        year: '01/12/2020',
        location: 'Madrid, España',
        details: 'Entidad acreditante: Agencia Estatal de Investigación.',
    },
    {
        type: 'Revisión científica',
        title: 'Revisora de revistas científicas',
        year: 'Actualidad',
        details: 'Revisora de la revista Microbial Cell Factories.',
    },
];
const selectedArticles = [
    {
        authors: "María García-Toledo, Belén Juárez-Jiménez, Belén Rodelas, Clementina Pozo, Jessica Purswani",
        year: "2026",
        status: "Accepted. In press.",
        title: "Plant growth-promoting rhizobacteria behaviour dynamics under environmental perturbations: selection of social and resilient consortia",
        journal: "Environmental Technology & Innovation",
    },
    {
        authors: "María García-Toledo, Antonio Castellano-Hinojosa, Andrea Ortiz-Úbeda, Belén Rodelas, Belén Juárez-Jiménez, Clementina Pozo, Jessica Purswani",
        year: "2025",
        title: "BSocial Tool Deciphers Highly Functional Plant Growth-Promoting Bacterial Consortia",
        journal: "Microbial Biotechnology",
        doi: "doi.org/10.1111/1751-7915.70277",
        impact: "IF: 5,2",
        category: "Biotechnology & Applied Microbiology Q1; Microbiology Q1",
    },
    {
        authors: "Úrsula Gallardo-Gomez, Belén Juárez-Jiménez, David Correa-Galeote, Alberto Zafra-Gomez",
        year: "2025",
        title: "Sea cucumbers as bioindicators of pollution and sea cucumber microbiomes as markers of environmental stress: A review",
        journal: "Journal of Environmental Chemical Engineering",
        doi: "doi.org/10.1016/j.jece.2025.119246",
        impact: "IF: 7,4",
        category: "Engineering, Chemical Q1; Engineering, Environmental Q1",
    },
    {
        authors: "Pérez Bou, Lizandra; González Martínez, Alejandro; Cabrera, Juan J.; Juárez Jiménez, Belén; Rodelas, Belén; González López, Jesús; Correa Galeote, David",
        year: "2024",
        title: "Design and Validation of Primer Sets for the Detection and Quantification of Antibiotic Resistance Genes in Environmental Samples by Quantitative PCR",
        journal: "Microbial Ecology",
        doi: "10.1007/s00248-024-02385-0",
        impact: "IF: 3,3",
        category: "Marine & Freshwater Biology Q1; Ecology Q2; Microbiology Q2",
        cites: "Cited: 2",
    },
    {
        authors: "Juárez Jiménez, Belén; Fenice, Massimiliano; Pasqualetti, Marcela; Muñoz Palazón, Bárbara; Correa Galeote, David; Braconcini, Martina; Gorrasi, Susanna",
        year: "2023",
        title: "Flow Cytometric Investigation of Salinicola halophilus S28 Physiological Response Provides Solid Evidence for Its Uncommon and High Ability to Face Salt-Stress Conditions",
        journal: "Microbiology Research",
        doi: "10.3390/microbiolres14020034",
        impact: "IF: 2,1",
        category: "Microbiology Q3",
    },
    {
        authors: "Correa Galeote, David; Argiz, Lucía; Val Del Río, Ángeles; Mosquera Corral, Anuska; Juárez Jiménez, Belén; González López, Jesús; Rodelas, Belén",
        year: "2022",
        title: "Dynamics of PHA-Accumulating Bacterial Communities Fed with Lipid-Rich Liquid Effluents from Fish-Canning Industries",
        journal: "Polymers",
        doi: "10.3390/polym14071396",
        impact: "IF: 5,0",
        category: "Polymer Science Q1",
        cites: "Citas: 15",
    },
    {
        authors: "Correa Galeote, David; Argiz, Lucía; Mosquera Corral, Anuska; Val Del Río, Ángeles; Juárez Jiménez, Belén; González López, Jesús; Rodelas, Belén",
        year: "2022",
        title: "Structure of fungal communities in sequencing batch reactors operated at different salinities for the selection of triacylglyceride-producers from a fish-canning lipid-rich waste stream",
        journal: "New Biotechnology",
        doi: "10.1016/j.nbt.2022.08.001",
        impact: "IF: 5,4",
        category: "Biotechnology & Applied Microbiology Q1; Biochemical Research Methods Q1",
        cites: "Citas: 4",
    },
    {
        authors: "Pedrouso, Alba; Correa Galeote, David; Maza Márquez, Paula; Juárez Jiménez, Belén; Rodelas, Belén; Campos, José Luis; Mosquera Corral, Anuska; Val del Río, Ángeles",
        year: "2021",
        title: "Understanding the microbial trends in a nitritation reactor fed with primary settled municipal wastewater",
        journal: "Separation and Purification Technology",
        impact: "IF: 9,136",
        category: "Engineering, Chemical Q1",
        cites: "Citas: 6",
    },
    {
        authors: "Correa Galeote, David; Roibás Rozas, Alba; Mosquera Corral, Anuska; Juárez Jiménez, Belén; González López, Jesús; Rodelas, Belén",
        year: "2021",
        title: "Revealing the dissimilar structure of microbial communities in different WWTPs that treat fish-canning wastewater with different NaCl content",
        journal: "Journal of Water Process Engineering",
        doi: "10.1016/j.jwpe.2021.102328",
        impact: "IF: 7,34",
        category: "Engineering, Environmental; Water Resources",
        cites: "Citas: 17",
    },
    {
        authors: "Correa Galeote, David; Roibás, Alba; Mosquera Corral, Anuska; Juárez Jiménez, Belén; González López, Jesús; Rodelas, Belén",
        year: "2021",
        title: "Salinity is the major driver of the global eukaryotic community structure in fish-canning wastewater treatment plants",
        journal: "Journal of Environmental Management",
        doi: "10.1016/j.jenvman.2021.112623",
        impact: "IF: 8,910",
        category: "Environmental Sciences Q1",
        cites: "Citas: 12",
    },
    {
        authors: "Juárez Jiménez, Belén; Pesciaroli, Chiara; Maza Márquez, Paula; López Martínez, Sergio; Vílchez Quero, José Luis; Zafra Gómez, Alberto",
        year: "2019",
        title: "Biodegradation of methyl and butylparaben by bacterial strains isolated from amended and non-amended agricultural soil. Identification, behavior and enzyme activities of microorganisms",
        journal: "Journal of Environmental Management",
        doi: "10.1016/j.jenvman.2019.05.122",
        impact: "IF: 5,647",
        category: "Q1",
        cites: "Cited: 13",
    },
    {
        authors: "Muñoz Palazón, Bárbara; Rodríguez Sánchez, Alejandro; Hurtado Martínez, Miguel; Manuel de Castro, Inés; Juárez Jiménez, Belén; González Martínez, Alejandro; González López, Jesús",
        year: "2019",
        title: "Performance and microbial community structure of an aerobic granular sludge system at different phenolic acid concentrations",
        journal: "Journal of Hazardous Materials",
        doi: "10.1016/j.jhazmat.2019.05.015",
        impact: "IF: 9,038",
        category: "Engineering Environmental Science Q1",
    },
    {
        authors: "Dorival García, N.; Labajo Recio, C.; Zafra Gómez, A.; Juárez Jiménez, B.; Vílchez, J. L.",
        year: "2015",
        title: "Improved sample treatment for the determination of 17 strong sorbed quinolone antibiotics from compost by ultra high performance liquid chromatography tandem Mass Spectrometry",
        journal: "Talanta",
        doi: "10.1016/j.talanta.2015.03.011",
        impact: "IF: 4,035",
        category: "Chemistry Analytical Science Q1",
        cites: "Cited: 66",
    }
];

const congressItems = [
    {
        authors: "García-Toledo, M.; Juárez-Jiménez, B.; Rodelas, B.; González-López, J.; Pozo, C.; Purswani, J.",
        year: "2024",
        title: "Multi-stress effects on PGPM Social Behaviour",
        event: "XIX SEFIN Congreso",
        context: "BeMiPlant (Beneficial-Plant-Microbe Interactions)",
        organizer: "SEFIN",
        location: "España",
    },
    {
        authors: "Purswani, J.; García-Toledo, M.; Rodelas, B.; Juárez-Jiménez, B.; González-López, J.; Pozo, C.",
        year: "2024",
        title: "Social Biofertilizers: Rapid social consortia selection",
        event: "XIX SEFIN Congreso",
        context: "BeMiPlant (Beneficial-Plant-Microbe Interactions)",
        organizer: "SEFIN",
        location: "España",
    },
    {
        authors: "Belén Juárez-Jiménez; Alberto Zafra-Gómez; Chiara Pesciaroli; Patricia Morales-López; Sergio López-Martínez; José Luis Vílchez-Quero",
        year: "2017",
        title: "Use of methylparaben and buthylparaben as carbon/energy source by bacteria isolate from farmland. Enzimatic activities and biodegradation of these compounds",
        event: "BioRemid2017",
        organizer: "Universidad de Granada y Sociedad Española de Microbiología",
        location: "España",
        format: "Póster",
    },
    {
        authors: "Andrade, L.; Maza, P.; Reboleiro, P.; Juárez, B.; González-López, J.",
        year: "2011",
        title: "Cultivo y aislamiento de microalgas de la Laguna de la Caldera, situada en el Parque Nacional Sierra Nevada (Granada)",
        event: "XIII Congreso Nacional de Microbiología, SEM",
        organizer: "Sociedad Española de Microbiología",
        location: "España",
        format: "Póster",
    },
    {
        authors: "Cortés-Lorenzo, C.; Reboleiro-Rivas, P.; Morillo, J. A.; Juárez-Jiménez, B.; González-López, J.",
        year: "2011",
        title: "Efecto de la salinidad en las actividades enzimáticas microbianas en un sistema aerobio de lecho sumergido para el tratamiento de agua residual urbana con salinidad variable",
        event: "XIII Congreso Nacional de Microbiología, SEM",
        organizer: "Sociedad Española de Microbiología",
        location: "España",
        format: "Póster",
    },
    {
        authors: "Cortés-Lorenzo, C.; Reboleiro-Rivas, P.; Juárez-Jiménez, B.; Calderón, K.; Martínez-Toledo, M. V.; González-López, J.",
        year: "2011",
        title: "Estudio de las actividades enzimáticas en biorreactores de membrana (MBR) para el tratamiento de aguas residuales. Aplicación de oxígeno puro como variable de proceso",
        event: "XIII Congreso Nacional de Microbiología, SEM",
        organizer: "Sociedad Española de Microbiología",
        location: "España",
        format: "Póster",
    },
    {
        authors: "González-López, J.; Purswani, J.; Vílchez, R.; Juárez, B.; Martínez-Toledo, M. V.; Rodelas, B.",
        year: "2011",
        title: "La diversidad microbiana en tecnologías de biopelículas aplicadas al tratamiento de aguas residuales",
        event: "III Congreso Nacional de Biodiversidad",
        organizer: "Consejo Superior de Investigaciones Científicas (CSIC) y Universidad de Granada",
        location: "España",
        format: "Comunicación oral",
    }
];

const projectItems = [
    {
        code: "B-RNM-204-UGR20",
        year: "2021",
        title: "Optimización del compostaje de lodos de depuradoras a escala real para la eliminación de contaminantes emergentes y la obtención de enmiendas bioseguras",
        funding: "Junta de Andalucía. Consejería de Economía, Conocimiento, Empresas y Universidad, Fondos FEDER",
        duration: "01/07/2021-30/06/2023",
        principalInvestigators: "Elisabet Aranda y Maximino Manzanera",
    },
    {
        code: "PID2020-112550RD-C22",
        year: "2020-actualidad",
        title: "Desentrañando las poblaciones microbianas claves involucradas en la producción de compuestos de almacenamiento de valor añadido (PHAs y/o TAGs) a partir de residuos lipídicos",
        funding: "Ministerio de Ciencia e Innovación",
        principalInvestigators: "Jesús González López y Alejandro González Martínez",
        role: "Proyecto concedido en convocatoria de 2020-actualidad",
    },
    {
        code: "PID2020-118959RA-I00",
        year: "2020-actualidad",
        title: "Explorando el uso de bioinoculantes microbianos sociales para mitigar el estrés del cambio climático en el crecimiento vegetal",
        funding: "Ministerio de Ciencia e Innovación",
        principalInvestigators: "Jessica Purswani",
        role: "Proyecto concedido en convocatoria de 2020-actualidad",
    },
    {
        code: "CTQ2017-83225-C2-2-R",
        shortName: "MICROSALT",
        year: "2018-2020",
        title: "Linking microbial community diversity to efficiency of wastewater treatment in the fish canning industry at high salinity and low temperature",
        funding: "Programa Estatal de Investigación, Desarrollo e Innovación Orientada a los Retos de la Sociedad, MINECO",
        principalInvestigators: "Jesús González López (IP1), Belén Juárez Jiménez (IP2)",
    },
    {
        code: "CTM2013-48154-P",
        year: "2016-2017",
        title: "Tratamiento de agua residual urbana con salinidad variable en biorreactores de membrana sumergida con y sin lecho en suspensión",
        funding: "Ministerio de Economía y Competitividad",
        principalInvestigators: "Jesús González López (Universidad de Granada)",
        role: "Miembro de equipo",
        contribution: "Análisis químicos y de biodiversidad microbiana de las aguas tratadas en un biorreactor de membrana sumergida. Colaboración con otros miembros del equipo en los ensayos.",
    },
    {
        code: "CTQ2011-24210",
        year: "2012-2015",
        title: "Evolución de contaminantes orgánicos en suelos enmendados con lodos o compost procedentes de EDAR, implicaciones ambientales",
        funding: "Ministerio de Ciencia e Innovación",
        principalInvestigators: "José Luis Vílchez Quero (Universidad de Granada)",
        role: "Miembro de equipo",
        contribution: "Mi aportación consistió en la dirección y supervisión de la parte microbiológica de una tesis doctoral realizada en colaboración con el Departamento de Química Analítica.",
    }
];

const CvaCientifico: React.FC = () => {
    const { locale } = useI18n();
    const ui = SCIENTIFIC_CV_UI[locale];
    const tr = (text: string) => localizeScientificText(text, locale);

    return (
        <div className="pt-28 pb-24 bg-paper">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <section className="border-b border-gold/10 pb-14 mb-14">
                    <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold mb-5">
                        {ui.eyebrow}
                    </p>
                    <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_0.75fr] gap-10 xl:gap-16 items-start">
                        <div>
                            <h1 className="font-serif text-4xl md:text-6xl italic text-ink leading-tight mb-6">
                                {ui.title}
                            </h1>
                            <p className="text-ink/70 font-light text-lg md:text-xl leading-relaxed max-w-4xl text-justify">
                                {ui.introduction}
                            </p>
                        </div>

                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <p className="text-ink/40 font-sans text-[10px] uppercase tracking-[0.3em] mb-4">{ui.identifiers}</p>
                            <div className="space-y-5">
                                <div>
                                    <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.25em] mb-1">ResearchID</p>
                                    <p className="font-serif text-2xl text-ink">L-4241-2014</p>
                                </div>
                                <div>
                                    <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.25em] mb-1">ORCID</p>
                                    <p className="font-serif text-2xl text-ink">0000-0001-8495-7093</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/10 mb-16">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="bg-white/75 px-5 py-6 md:px-6 md:py-8 text-center">
                            <p className="font-serif text-3xl md:text-4xl italic text-ink mb-2">{metric.value}</p>
                            <p className="text-ink/50 font-sans text-[10px] md:text-xs uppercase tracking-[0.24em] leading-relaxed">{tr(metric.label)}</p>
                        </div>
                    ))}
                </section>

                <div className="space-y-16">
                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.formation}</p>
                        </div>
                        <div className="space-y-5 text-ink/75 font-light text-lg leading-relaxed text-justify">
                            {formationParagraphs.map((paragraph, index) => <p key={index}>{tr(paragraph)}</p>)}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.stays}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {professionalStays.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.duration)}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{item.dates}</p>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.institution)}</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.role)}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.production}</p>
                        </div>
                        <div className="space-y-5 text-ink/75 font-light text-lg leading-relaxed text-justify">
                            {productionParagraphs.map((paragraph, index) => <p key={index}>{tr(paragraph)}</p>)}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.leadership}</p>
                        </div>
                        <div className="space-y-5 text-ink/75 font-light text-lg leading-relaxed text-justify">
                            {leadershipParagraphs.map((paragraph, index) => <p key={index}>{tr(paragraph)}</p>)}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.merits}</p>
                        </div>
                        <div className="space-y-5 text-ink/75 font-light text-lg leading-relaxed text-justify">
                            {meritsParagraphs.map((paragraph, index) => <p key={index}>{tr(paragraph)}</p>)}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.outreach}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {outreachLectures.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.date)}</p>
                                            {item.duration && (
                                                <>
                                                    <span className="text-ink/30">·</span>
                                                    <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.duration)}</p>
                                                </>
                                            )}
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.context)}</span>
                                            {item.location && <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>}
                                        </div>
                                        {item.audience && (
                                            <p className="text-ink/70 font-light text-sm md:text-[15px] leading-relaxed text-justify">{tr(item.audience)}</p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.meetings}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {internationalMeetings.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.year)}</p>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.seminars}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {seminarActivities.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.year)}</p>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.context)}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.coordination}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {coordinationActivities.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.date)}</p>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.institution)}</span>
                                        </div>
                                        <p className="text-ink/70 font-light text-sm md:text-[15px] leading-relaxed text-justify">{tr(item.details)}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.distinctions}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {distinctions.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.year)}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-deep-red/80 font-sans text-[10px] uppercase tracking-[0.2em]">{tr(item.type)}</p>
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}</h3>
                                        {item.location && (
                                            <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                                <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>
                                            </div>
                                        )}
                                        <p className="text-ink/70 font-light text-sm md:text-[15px] leading-relaxed text-justify">{tr(item.details)}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.articles}</p>
                            <p className="mt-4 text-ink/45 font-sans text-xs uppercase tracking-[0.22em] leading-relaxed">{ui.publicationsSelection}</p>
                        </div>
                        <div className="space-y-4">
                            {selectedArticles.map((article, index) => (
                                <article key={index} className="border border-gold/10 bg-white/70 px-6 py-6 md:px-8 shadow-sm">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                        <span className="text-ink/30">·</span>
                                        <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{article.year}</p>
                                        {article.status && (
                                            <>
                                                <span className="text-ink/30">·</span>
                                                <p className="text-deep-red/80 font-sans text-[10px] uppercase tracking-[0.2em]">{article.status}</p>
                                            </>
                                        )}
                                    </div>
                                    <p className="text-ink/65 font-sans text-sm md:text-[15px] leading-relaxed mb-3 text-justify">{article.authors}.</p>
                                    <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{article.title}.</h3>
                                    <p className="font-serif italic text-deep-red text-lg md:text-xl mb-4">{article.journal}</p>
                                    <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60">
                                        {article.doi && <span className="border border-gold/15 bg-paper/70 px-3 py-1">DOI: {article.doi}</span>}
                                        {article.impact && <span className="border border-gold/15 bg-paper/70 px-3 py-1">{article.impact}</span>}
                                        {article.category && <span className="border border-gold/15 bg-paper/70 px-3 py-1">{article.category}</span>}
                                        {article.cites && <span className="border border-gold/15 bg-paper/70 px-3 py-1">{tr(article.cites)}</span>}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.congresses}</p>
                            <p className="mt-4 text-ink/45 font-sans text-xs uppercase tracking-[0.22em] leading-relaxed">{ui.recentContributions}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {congressItems.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.year)}</p>
                                            {item.format && (
                                                <>
                                                    <span className="text-ink/30">·</span>
                                                    <p className="text-deep-red/80 font-sans text-[10px] uppercase tracking-[0.2em]">{tr(item.format)}</p>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-ink/65 font-sans text-sm md:text-[15px] leading-relaxed mb-3 text-justify">{item.authors}</p>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">{tr(item.title)}.</h3>
                                        <p className="font-serif italic text-deep-red text-lg md:text-xl mb-4">{item.event}</p>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60">
                                            {item.context && <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.context)}</span>}
                                            {item.organizer && <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.organizer)}</span>}
                                            {item.location && <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.location)}</span>}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 xl:grid-cols-[240px_1fr] gap-8 xl:gap-12">
                        <div>
                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.35em] font-bold">{ui.projects}</p>
                            <p className="mt-4 text-ink/45 font-sans text-xs uppercase tracking-[0.22em] leading-relaxed">{ui.featuredSelection}</p>
                        </div>
                        <div className="border border-gold/10 bg-white/70 shadow-sm px-6 py-6 md:px-8 md:py-8">
                            <div className="space-y-4">
                                {projectItems.map((item, index) => (
                                    <article key={index} className="border border-gold/10 bg-paper/50 px-5 py-5">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <p className="text-deep-red font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{String(index + 1).padStart(2, '0')}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.25em]">{tr(item.year)}</p>
                                            <span className="text-ink/30">·</span>
                                            <p className="text-deep-red/80 font-sans text-[10px] uppercase tracking-[0.2em]">{item.code}</p>
                                            {item.shortName && (
                                                <>
                                                    <span className="text-ink/30">·</span>
                                                    <p className="text-ink/45 font-sans text-[10px] uppercase tracking-[0.2em]">{item.shortName}</p>
                                                </>
                                            )}
                                        </div>
                                        <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug mb-4">{tr(item.title)}.</h3>
                                        <div className="flex flex-wrap gap-2 text-[11px] font-sans leading-relaxed text-ink/60 mb-4">
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.funding)}</span>
                                            <span className="border border-gold/15 bg-white/70 px-3 py-1">{ui.principalInvestigator}: {item.principalInvestigators}</span>
                                            {item.duration && <span className="border border-gold/15 bg-white/70 px-3 py-1">{ui.duration}: {tr(item.duration)}</span>}
                                            {item.role && <span className="border border-gold/15 bg-white/70 px-3 py-1">{tr(item.role)}</span>}
                                        </div>
                                        {item.contribution && (
                                            <p className="text-ink/70 font-light text-sm md:text-[15px] leading-relaxed text-justify">{tr(item.contribution)}</p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CvaCientifico;











