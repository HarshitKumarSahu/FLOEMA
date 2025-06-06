import express from 'express';
const router = express.Router();

import { home, collections } from '../data/collections.data.js';
import { products } from '../data/products.data.js';

router.get('/', (req, res) => {
  res.render('pages/collections', { title: 'Floema - collections', home, collections });
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.render('pages/detail', { 
      title: `Floema - ${product.data.title}`, 
      products: { data: { body: [product] } }
    });
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;