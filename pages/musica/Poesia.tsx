import React, { useState } from 'react';
import { ALBUM_TRACKS } from '../../constants';
import { Play, Pause, Music as MusicIcon, Disc } from 'lucide-react';

const Poesia: React.FC = () => {
    const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = (id: string) => {
        if (currentTrackId === id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrackId(id);
            setIsPlaying(true);
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <p className="text-gray-400 font-light">
                    Paisajes sonoros generados a partir de la estructura métrica de los poemas.
                </p>
            </div>

            <div className="space-y-4">
                {ALBUM_TRACKS.map((track) => (
                    <div
                        key={track.id}
                        className={`p-4 border border-white/10 rounded hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group ${currentTrackId === track.id ? 'bg-white/10 border-white/30' : ''}`}
                        onClick={() => togglePlay(track.id)}
                    >
                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deep-red transition-colors">
                                {currentTrackId === track.id && isPlaying ? <Pause size={18} /> : <Play size={18} />}
                            </button>
                            <div>
                                <h4 className="font-sans font-medium text-white group-hover:text-gold-accent transition-colors">{track.title}</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Basado en {track.poemSource}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {currentTrackId === track.id && isPlaying && (
                                <div className="flex gap-1 items-end h-4">
                                    <span className="w-0.5 h-2 bg-gold-accent animate-[bounce_1s_infinite]"></span>
                                    <span className="w-0.5 h-4 bg-gold-accent animate-[bounce_1.2s_infinite]"></span>
                                    <span className="w-0.5 h-3 bg-gold-accent animate-[bounce_0.8s_infinite]"></span>
                                </div>
                            )}
                            <span className="font-mono text-sm text-gray-500">{track.duration}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex gap-4 max-w-md">
                <button className="flex-1 py-3 border border-white/30 text-white font-sans uppercase text-sm tracking-widest hover:bg-white hover:text-ink transition-all flex items-center justify-center gap-2">
                    <MusicIcon size={16} /> Spotify
                </button>
                <button className="flex-1 py-3 border border-white/30 text-white font-sans uppercase text-sm tracking-widest hover:bg-white hover:text-ink transition-all flex items-center justify-center gap-2">
                    <Disc size={16} /> Apple Music
                </button>
            </div>
        </div>
    );
};

export default Poesia;
