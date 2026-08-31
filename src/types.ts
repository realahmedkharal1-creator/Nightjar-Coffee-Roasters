export interface MenuItem {
  id: string;
  name: string;
  category: 'tap' | 'hot-coffee' | 'cold-coffee' | 'beans' | 'kitchen';
  priceAED: number;
  description: string;
  tags?: string[];
  image?: string;
  popular?: boolean;
  notes?: string;
  origin?: string;
  roastLevel?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'Deliveroo' | 'Time Out Dubai';
  comment: string;
  avatarText: string;
  dishRecommended?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'Interior & Vibe' | 'Coffee & Nitro' | 'Food & Brunch' | 'Roastery & Beans';
  alt: string;
}

export interface TapBeverage {
  id: string;
  name: string;
  type: string;
  priceAED: number;
  originLot: string;
  tastingNotes: string[];
  body: string;
  temp: string;
  description: string;
  caffeine: 'High' | 'Medium' | 'Zero';
  image: string;
}
