const express = require('express');
const path = require('path');
const products = require('./data/data');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Floema Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Floema' });
});

app.get('/collections', (req, res) => {
    res.render('collections', { title: 'Collections', products });
});

// app.get('/collections/:slug', (req, res) => {
//     const product = products.find(p => p.slug === req.params.slug);
//     if (product) {
//         res.render('collection', { title: product.name, product });
//     } else {
//         res.status(404).send('Collection not found');
//     }
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});