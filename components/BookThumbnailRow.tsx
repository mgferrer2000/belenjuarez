import React from 'react';
import destierroCover from '../documentación/2.1 LIBROS/DESTIERRO EN CUATRO ANGULOS/Portada-cuatroangulospeque.png';

interface BookItem {
    imgSrc: string;
    title: string;
    year?: string;
    description: string;
    alt: string;
    downloadUrl?: string;
}

const books: BookItem[] = [
    {
        imgSrc: destierroCover,
        title: 'Destierro en cuatro ángulos',
        year: '1999',
        description: `Primer libro publicado en 1999, en la Editorial Devenir. El libro está dividido en cuatro capítulos Tierra, Agua, Aire y Fuego donde se repiten los títulos de los poemas. De tal forma que se puede leer de forma lineal (por capítulos) o tomando los poemas de igual título de cada capítulo convirtiéndose en un único poema deslizándose por los cuatro elementos. En palabras de Antonio Enrique (Turia, nº 53) «El libro, así, rueda sobre sí mismo y se desplaza en elipse: posee los ejes de rotación (en sus poemas) y de traslación (las partes en que éstos se vertebran).» La temática gira en torno al tiempo donde se sostiene la vida, y todas las miserias que en ella acontecen: El tiempo y la desintegración de todo lo viviente, la inutilidad de las pasiones, la condición de exilio del ser humano, la tentación de la violencia, la radical ineptitud para el gozo, constituyen algunos de sus temas recurrentes.`,
        alt: 'Destierro en cuatro ángulos cover',
        downloadUrl: '/downloads/destierro_en_cuatro_angulos.pdf',
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80',
        title: 'La Geometría del Silencio',
        year: '2021',
        description: 'Versos que dibujan las formas que deja la ausencia. Un poemario intimista y desgarrador.',
        alt: 'Placeholder cover 2',
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80',
        title: 'Raíces de Vidrio',
        year: '2019',
        description: 'Opera prima. La fragilidad de la memoria y la dureza del olvido.',
        alt: 'Placeholder cover 3',
    },
];

export const BookThumbnailRow: React.FC = () => (
    <div className="grid md:grid-cols-3 gap-12 mb-12">
        {books.map((book, idx) => (
            <div key={idx} className="flex flex-col group">
                <div className="relative w-full mb-6 rounded-sm shadow-lg overflow-hidden aspect-[2/3]">
                    <img src={book.imgSrc} alt={book.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    {book.downloadUrl && (
                        <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a
                                href={book.downloadUrl}
                                download
                                className="border border-white text-white px-6 py-3 font-sans uppercase tracking-widest hover:bg-white hover:text-ink transition-colors text-sm"
                            >
                                Descarga gratuita
                            </a>
                        </div>
                    )}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-1">{book.title}</h3>
                {book.year && <p className="text-deep-red text-sm font-sans mb-3">{book.year}</p>}
                <p className="text-ink/70 font-light leading-relaxed text-sm text-justify">
                    {book.description}
                </p>
            </div>
        ))}
    </div>
);
