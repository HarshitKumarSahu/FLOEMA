import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Floema - Home', products: [] });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Floema' });
});

export default router;