import express from 'express';
const router = express.Router();
import { about } from '../data/about.data.js';
import { home, collections } from '../data/index.data.js';

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Floema - Home',home , collections });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Floema', about });
});

export default router;