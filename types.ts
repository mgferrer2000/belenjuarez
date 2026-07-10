export interface Book {
  id: string;
  title: string;
  year: string;
  description: string;
  coverUrl: string;
  coverPosition?: string;
  aspectRatio?: string;
  featured?: boolean;
  extendedDescription?: string;
  backCoverVerses?: string[];
  purchaseUrl?: string;
  downloads?: { label: string; url: string }[];
}

export interface Collaboration {
  id: string;
  publication: string;
  title: string;
  type: 'Revista' | 'Antología' | 'Crítica';
  url?: string;
  externalNote?: string;
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
  mediumDetail?: string;
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
  extraInfo?: string;
  content: string;
  coverUrl: string;
  images?: { url: string; caption?: string }[];
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
  externalUrl?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  detailImageUrl?: string;
  detailImageCaption?: string;
}

export interface PlaquetteSection {
  number: number;
  title: string;
  content: string;
}

export interface Plaquette {
  id: string;
  title: string;
  event?: string;
  date?: string;
  location?: string;
  publication?: string;
  credits?: string;
  coverUrl: string;
  illustrationUrl?: string;
  sections: PlaquetteSection[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface StorySection {
  title?: string;
  content: string;
  illustrationUrl?: string;
  illustrationSize?: 'sm' | 'md' | 'lg' | 'full';
}

export interface ShortStory {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  publicationInfo: string;
  synopsis: string;
  coverUrl: string;
  coverPosition?: string;
  sections: StorySection[];
  pdfUrl?: string;
}

export interface ReviewItem {
  id: string;
  title: string;
  author?: string;
  publicationInfo?: string;
  text: string;
  imageUrl?: string;
  images?: string[];
}

export interface LiteraryCriticism {
  id: string;
  publication: string;
  title?: string;
  year: string;
  coverUrl: string;
  slug: string; // For routing
  excerpt?: string;
  reviews?: ReviewItem[];
}

export interface Interview {
  id: string;
  title: string;
  publication: string;
  year: string;
  date: string;
  intro: string;
  content: string;
  coverUrl: string;
  slug: string;
  interviewer?: string;
  location?: string;
  images?: string[];
  hideIntroInDetail?: boolean;
}
