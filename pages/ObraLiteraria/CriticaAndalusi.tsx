import React from 'react';
import { BookOpen, Library, ScrollText } from 'lucide-react';

type AndalusiBook = {
    title: string;
    author: string;
    publisher: string;
    note?: string;
};

type AndalusiIssue = {
    yearLabel: string;
    issueLabel: string;
    books: AndalusiBook[];
};

const ANDALUSI_ISSUES: AndalusiIssue[] = [
    {
        yearLabel: 'Ano IV',
        issueLabel: 'Numeros 14-15-16',
        books: [
            { title: 'Historia de la intolerancia en Europa', author: 'Italo Mereu', publisher: 'Paidos Iberica' },
            { title: 'Los Principes nubios', author: 'Juan Bonilla', publisher: 'Seix Barral', note: 'Premio Biblioteca Breve 2003' },
            { title: 'Telon de Boca', author: 'Juan Goytisolo', publisher: 'El Aleph Editores' },
            { title: 'Las reinas de Africa', author: 'Cristina Morato', publisher: 'Plaza & Janes' },
            { title: 'El Mediterraneo', author: 'Fernando de Villena', publisher: 'Dauro' },
            { title: 'La Cruzada del sur. La reconquista de Covadonga a la toma de Granada', author: 'Juan Antonio Cebrian', publisher: 'La Esfera de los Libros' },
            { title: 'De Nueva York a Granada. Cuentos y Leyendas', author: 'Washington Irving', publisher: 'Paginas de Espuma' },
            { title: 'Viaje a la luz del Cham', author: 'Rosa Regas', publisher: 'Siete Leguas' },
            { title: 'Al-Hamra', author: 'Jose Manuel Garcia Marin', publisher: 'Rosa Cruces' },
            { title: 'La luna sobre la Sabica', author: 'Carolina Molina', publisher: 'Entrelineas' },
            { title: 'Mujeres arabes hablan de sus vidas', author: 'Bouthaina Shaaban', publisher: 'Fundacion El Legado Andalusi' },
        ],
    },
    {
        yearLabel: 'Ano V',
        issueLabel: 'Numeros 17-19-20',
        books: [
            { title: 'Al-Andalus desde la periferia. La formacion de una sociedad musulmana en tierras malaguenas (siglos VIII-X)', author: 'Virgilio Martinez Enamorado', publisher: 'Centro de Ediciones de la Diputacion de Malaga', note: 'Monografias' },
            { title: 'Drugstore', author: 'Guillermo Busutil', publisher: 'Paginas de Espuma' },
            { title: 'Con la palabra y la imagen. 25 anos de Constitucion espanola', author: 'Idea y proyecto: Alfonso Guerra y Salvador Clotas', publisher: 'Fundacion Pablo Iglesias' },
            { title: 'Paisaje y Naturaleza en Al-Andalus', author: 'VV.AA.', publisher: 'Fundacion El Legado Andalusi' },
            { title: 'Boabdil. Tragedia del ultimo rey de Granada', author: 'Magdalena Lasala', publisher: 'Temas de Hoy' },
            { title: 'Aynadamar. De Fuente Grande al Albayzin', author: 'Francisco Gonzalez Arroyo y Salvador Ruiz Caballero', publisher: 'Caja General de Ahorros de Granada' },
            { title: 'Petra (La ciudad Rosa)', author: 'Jose Lupianez', publisher: 'Port Royal' },
            { title: 'Plazas y Jardines en Andalucia. Jornadas europeas de patrimonio 2004', author: 'Junta de Andalucia. Consejeria de Cultura', publisher: 'Junta de Andalucia', note: '2004' },
            { title: 'Origenes', author: 'Amin Maalouf', publisher: 'Alianza Editorial', note: '2004' },
            { title: 'Andalusies. La memoria custodiada', author: 'Juan Castilla Brazales', publisher: 'Fundacion El Legado Andalusi', note: '2004' },
            { title: 'Silver Shadow', author: 'Antonio Enrique', publisher: 'Dauro', note: 'Coleccion Ex-Libris, 2004' },
        ],
    },
    {
        yearLabel: 'Ano VI',
        issueLabel: 'Numero 21',
        books: [
            { title: 'Descripcion General del Africa y de las cosas peregrinas que alli hay', author: 'Juan Leon Africano', publisher: 'Fundacion El Legado Andalusi' },
            { title: 'La Revolucion islamica en Occidente', author: 'Ignacio Ologue', publisher: 'Plurabelle' },
            { title: 'Azafran', author: 'Jose Manuel Garcia Marin', publisher: 'Roca' },
            { title: 'La larga noche de Angela', author: 'Manuel Villar Raso', publisher: 'Alhulia' },
        ],
    },
];

const CriticaAndalusi: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto pb-24">
            <header className="mb-16 border-b border-gold/10 pb-10">
                <div className="flex items-center gap-3 text-deep-red font-sans text-xs uppercase tracking-[0.3em] font-bold mb-6">
                    <Library size={16} />
                    <span>Archivo Critico</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink leading-tight mb-5">
                    Critica libros legado andalusi
                </h2>

                <div className="w-24 h-[1px] bg-deep-red/60 mb-8"></div>

                <div className="max-w-3xl space-y-5 text-ink/70 font-light leading-relaxed text-lg text-justify">
                    <p>
                        Relacion de libros reseñados por Belen Juarez en la revista <em className="font-serif italic text-ink">El Legado andalusi</em>,
                        subtitulada <em className="font-serif italic text-ink">Una nueva sociedad mediterranea</em>.
                    </p>
                    <p>
                        La seleccion recoge distintas entregas de la publicacion y deja ver un horizonte de lectura amplio: historia,
                        memoria, mundo mediterraneo, al-Andalus, narrativa, poesia y ensayo cultural.
                    </p>
                </div>
            </header>

            <section className="grid grid-cols-1 gap-12">
                {ANDALUSI_ISSUES.map((issue) => (
                    <article
                        key={issue.issueLabel}
                        className="relative overflow-hidden border border-gold/10 bg-white/70 shadow-sm rounded-sm"
                    >
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gold/40"></div>

                        <div className="p-8 md:p-10 lg:p-12">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                                <div className="lg:w-64 flex-shrink-0">
                                    <div className="lg:sticky lg:top-32">
                                        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red font-bold mb-3">
                                            Revista
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-serif text-ink italic leading-tight mb-2">
                                            El Legado andalusi
                                        </h3>
                                        <p className="text-sm font-sans uppercase tracking-[0.2em] text-ink/45 mb-6">
                                            {issue.yearLabel}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-ink/60 font-sans text-xs uppercase tracking-widest border-b border-gold/20 pb-2">
                                            <ScrollText size={14} className="text-gold-accent" />
                                            {issue.issueLabel}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-8">
                                        <BookOpen size={18} className="text-deep-red" />
                                        <p className="text-sm font-sans uppercase tracking-[0.25em] text-ink/50">
                                            Libros reseñados
                                        </p>
                                    </div>

                                    <ol className="space-y-6">
                                        {issue.books.map((book, bookIndex) => (
                                            <li
                                                key={`${issue.issueLabel}-${book.title}`}
                                                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/5 pb-6 last:border-b-0 last:pb-0"
                                            >
                                                <span className="pt-1 text-[10px] font-sans uppercase tracking-[0.3em] text-deep-red/70 font-bold">
                                                    {String(bookIndex + 1).padStart(2, '0')}
                                                </span>
                                                <div className="space-y-2">
                                                    <h4 className="text-xl md:text-2xl font-serif text-ink italic leading-snug">
                                                        {book.title}
                                                    </h4>
                                                    <p className="text-sm md:text-base font-sans text-ink/65 leading-relaxed">
                                                        <span className="font-semibold text-ink/80">{book.author}</span>
                                                        <span className="text-ink/35"> {' '}·{' '} </span>
                                                        <span>{book.publisher}</span>
                                                        {book.note && (
                                                            <>
                                                                <span className="text-ink/35"> {' '}·{' '} </span>
                                                                <span className="italic">{book.note}</span>
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default CriticaAndalusi;

