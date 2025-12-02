import React from 'react';
import { COLLABORATIONS } from '../../constants';
import { BookOpen, ExternalLink } from 'lucide-react';

const Antologias: React.FC = () => {
    return (
        <div className="max-w-3xl">
            <h3 className="text-2xl font-serif text-ink mb-8 flex items-center gap-3">
                <BookOpen size={24} className="text-deep-red" />
                Antologías y Revistas
            </h3>
            <ul className="space-y-6">
                {COLLABORATIONS.map((collab) => (
                    <li key={collab.id} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <span className="font-bold text-ink/80">{collab.publication}</span>
                            <span className="text-xs text-gray-500">{collab.date}</span>
                        </div>
                        <p className="text-ink font-serif italic mb-2">"{collab.title}"</p>
                        <div className="flex items-center gap-2">
                            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600 uppercase tracking-wide">{collab.type}</span>
                            {collab.url && (
                                <a href={collab.url} className="text-deep-red text-xs flex items-center gap-1 hover:underline">
                                    Leer <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Antologias;
