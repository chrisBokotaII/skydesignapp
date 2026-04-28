import { Apartment } from './types';

export const APARTMENTS: Apartment[] = [
  {
    id: '1',
    title: 'The Sky-High Penthouse',
    location: 'Downtown Dubai',
    price: '$8,500,000',
    beds: 4,
    baths: 5,
    sqft: 4200,
    description: 'A masterpiece of contemporary design featuring panoramic views of the Burj Khalifa and the Dubai Fountain. Includes a private infinity pool and smart home integration.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
,'https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcGFydG1lbnR8ZW58MHx8MHx8fDA%3D'  
  ],
    category: 'Downtown',
    featured: true
  },
  {
    id: '2',
    title: 'Azure Marina Suite',
    location: 'Dubai Marina',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: 2800,
    description: 'Floor-to-ceiling windows overlook the glittering yacht harbor. This residence offers a seamless blend of indoor-outdoor living with a expansive terrace.',
    imageUrl: 'https://images.unsplash.com/photo-1526495124232-a02e18494d17?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1526495124232-a02e18494d17?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512918766465-490ec9c50674?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719477381-443013d744d5?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'Marina'
  },
  {
    id: '3',
    title: 'Palm Infinity Villa',
    location: 'Palm Jumeirah',
    price: 'Price on Request',
    beds: 6,
    baths: 7,
    sqft: 8500,
    description: 'Ultimate beachfront luxury. Located on the world-famous fronds of Palm Jumeirah, this villa features a private beach access and a waterfall atrium.',
    imageUrl: 'https://images.unsplash.com/photo-1549918840-7d088518cf03?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549918840-7d088518cf03?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'Palm Jumeirah',
    featured: true
  },
  {
    id: '4',
    title: 'The Obsidian Loft',
    location: 'Business Bay',
    price: '$1,850,000',
    beds: 2,
    baths: 2,
    sqft: 1800,
    description: 'Industrial-chic meets Arabian luxury. This loft features double-height ceilings, raw concrete accents, and stunning Canal views.',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-f1ba5adad80f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502005229762-f1ba5adad80f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'Business Bay'
  },
  {
    id: '5',
    title: 'Radiant Marina Heights',
    location: 'Dubai Marina',
    price: '$2,100,000',
    beds: 2,
    baths: 2,
    sqft: 1650,
    description: 'A vibrant residence in the heart of the Marina, walking distance to JBR beach and the metro. Perfect for professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-4ad236f757cf?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687940-4ad236f757cf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691722718-620a40098e1c?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'Marina'
  },
  {
    id: '6',
    title: 'Elysian Downtown',
    location: 'Downtown Dubai',
    price: '$4,900,000',
    beds: 3,
    baths: 4,
    sqft: 3100,
    description: 'Elegance redefined in the Opera District. Sophisticated interiors by world-renowned designers with direct Boulevard access.',
    imageUrl: 'https://images.unsplash.com/photo-1512918766465-490ec9c50674?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512918766465-490ec9c50674?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
    ],
    category: 'Downtown'
  }
];
