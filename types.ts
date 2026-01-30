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
  year?: string;
  description?: string;
  category?: 'cuadros' | 'bocetos';
}

export interface IllustratedBook {
  id: string;
  title: string;
  year?: string;
  description?: string;
  coverUrl: string;
  illustrations: ArtPiece[];
}

export interface ArtArticle {
  id: string;
  title: string;
  author: string;
  publication: string;
  date: string;
  content: string;
  coverUrl: string;
  images?: string[];
  extraInfo?: string;
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  poemSource: string;
  spotifyId?: string;
  youtubeId?: string;
}

export interface BookReview {
  id: string;
  title: string;
  bookTitle: string;
  author: string;
  publication: string;
  date: string;
  coverUrl: string;
  condensedQuote: string;
  fullContent: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}