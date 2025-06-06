import express from 'express';
const router = express.Router();
import { about } from '../data/about.data.js';

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Floema - Home', products: [] });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Floema', about });
});

export default router;