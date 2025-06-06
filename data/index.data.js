import { collections } from './collections.data.js';

export const home = {
  data: {
    collection: 'Collection',
    gallery: [
      { image: { url: '/images/gallery-1.jpg', alt: 'Diamond Necklace' } },
      { image: { url: '/images/gallery-2.jpg', alt: 'Gold Bracelet' } },
      { image: { url: '/images/gallery-3.jpg', alt: 'Sapphire Ring' } }
    ],
    collections: '/collections',
    button: 'View Collections'
  }
};

export { collections };