export interface Apartment {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  imageUrl: string;
  images?: string[];
  category: 'Downtown' | 'Marina' | 'Palm Jumeirah' | 'Business Bay';
  featured?: boolean;
}
