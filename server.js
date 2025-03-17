const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files like images and css
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/product_pages', express.static(path.join(__dirname, 'product_pages')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Define routes for each HTML page
app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-us.html'));
});

app.get('/collection', (req, res) => {
    res.sendFile(path.join(__dirname, 'collection.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Default route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request served by node app");
});

// Start the server
app.listen(port, () => {
    console.log('Node app is listening on http://localhost:3000');
});
