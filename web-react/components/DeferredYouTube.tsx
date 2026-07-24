import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface DeferredYouTubeProps {
  youtubeId: string;
  title: string;
}

const DeferredYouTube: React.FC<DeferredYouTubeProps> = ({ youtubeId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="h-full w-full"
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="group relative h-full w-full bg-black text-white"
      aria-label={`Reproducir ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-90"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-black/55 backdrop-blur-sm transition-transform group-hover:scale-105">
          <Play size={26} className="ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
};

export default DeferredYouTube;
