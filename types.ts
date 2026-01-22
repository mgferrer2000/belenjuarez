export interface Book {
  id: string;
  title: string;
  year: string;
  description: string;
  coverUrl: string;
  purchaseUrl?: string;
  downloads?: { label: string; url: string }[];
}

export interface Collaboration {
  id: string;
  publication: string;
  title: string;
  type: 'Revista' | 'Antología' | 'Crítica';
  url?: string;
  date: string;
  description: string;
  coverUrl: string;
  imagePosition?: string; // e.g. 'top', 'center', 'bottom' or specific values
  fullText?: string;
  images?: string[]; // Array of illustrative image URLs
  purchaseUrl?: string; // Optional purchase link for the magazine/anthology
}

export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  poemSource: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}