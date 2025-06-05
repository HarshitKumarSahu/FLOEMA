import express from 'express';
const router = express.Router();

// Sample product data (replace with database later)
const products = [
  { id: 1, name: 'Diamond Ring', price: 999 },
  { id: 2, name: 'Gold Necklace', price: 1499 }
];

router.get('/', (req, res) => {
  res.render('pages/products', { title: 'Floema - Products', products });
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.render('pages/product', { title: `Floema - ${product.name}`, product });
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;