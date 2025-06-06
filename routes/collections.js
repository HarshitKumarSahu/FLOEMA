import express from 'express';
const router = express.Router();

// Sample product data (replace with database later)
const collections = [
  { id: 1, name: 'Diamond Ring', price: 999 },
  { id: 2, name: 'Gold Necklace', price: 1499 }
];

router.get('/', (req, res) => {
  res.render('pages/collections', { title: 'Floema - collections', collections });
});

router.get('/:id', (req, res) => {
  const detail = collections.find(p => p.id === parseInt(req.params.id));
  if (detail) {
    res.render('pages/detail', { title: `Floema - ${detail.name}`, detail });
  } else {
    res.status(404).send('Collection not found');
  }
});

export default router;