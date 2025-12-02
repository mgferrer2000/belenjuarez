import React from 'react';

const Critica: React.FC = () => {
    return (
        <div className="max-w-3xl">
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
    );
};

export default Critica;
