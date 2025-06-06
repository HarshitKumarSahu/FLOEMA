import { products } from './products.data.js';

export const home = {
  data: {
    collection: 'Collection'
  }
};

export const collections = [
  {
    data: {
      title: 'Signature Collection',
      description: 'Timeless elegance crafted with precision.\nDiscover our iconic designs.',
      products: [
        { products_product: products[0] } // Solitaire Ring
      ]
    }
  },
  {
    data: {
      title: 'Gemstone Collection',
      description: 'Vibrant gemstones set in exquisite designs.\nPerfect for every occasion.',
      products: [
        { products_product: products[1] } // Emerald Pendant
      ]
    }
  },
  {
    data: {
      title: 'Gemstone Collection',
      description: 'Vibrant gemstones set in exquisite designs.\nPerfect for every occasion.',
      products: [
        { products_product: products[2] } // Emerald Pendant
      ]
    }
  },
  {
    data: {
      title: 'Gemstone Collection',
      description: 'Vibrant gemstones set in exquisite designs.\nPerfect for every occasion.',
      products: [
        { products_product: products[3] } // Emerald Pendant
      ]
    }
  }
];