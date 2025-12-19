export interface Slide {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    imageUrl: string;
}

export interface GeneratedSlideContent {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    imageTheme: string; // Used to pick a relevant placeholder
}