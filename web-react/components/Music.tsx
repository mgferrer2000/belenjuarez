import React, { useState } from 'react';
import { ALBUM_TRACKS } from '../constants';
import { Play, Pause, Music as MusicIcon, Disc } from 'lucide-react';
import { motion } from 'framer-motion';

const Music: React.FC = () => {
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
    <section id="music" className="py-24 bg-ink text-paper px-6 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-deep-red blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Album Cover / Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-sm shadow-2xl border border-gray-700 flex items-center justify-center relative overflow-hidden group">
              <img 
                src="https://picsum.photos/600/600?grayscale&blur=1" 
                alt="Horizonte de Sucesos Cover" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity"
              />
              <div className={`w-full h-full absolute inset-0 flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                <div className="w-32 h-32 md:w-48 md:h-48 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 md:w-36 md:h-36 border border-white/40 rounded-full"></div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-2">Horizonte</h3>
                <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase text-gray-400">de Sucesos</h3>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-400 font-mono">
              <span>EST. 2023</span>
              <span>BELÉN JUAREZ</span>
              <span>LP AUDIO</span>
            </div>
          </motion.div>

          {/* Tracklist */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-serif text-white mb-2">Música & Poesía</h2>
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

            <div className="mt-8 flex gap-4">
              <button className="flex-1 py-3 border border-white/30 text-white font-sans uppercase text-sm tracking-widest hover:bg-white hover:text-ink transition-all flex items-center justify-center gap-2">
                 <MusicIcon size={16} /> Spotify
              </button>
              <button className="flex-1 py-3 border border-white/30 text-white font-sans uppercase text-sm tracking-widest hover:bg-white hover:text-ink transition-all flex items-center justify-center gap-2">
                 <Disc size={16} /> Apple Music
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Music;