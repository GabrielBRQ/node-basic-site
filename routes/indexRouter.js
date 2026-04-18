const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

indexRouter.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

indexRouter.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact-me.html'));
});

// redirects
indexRouter.get('/contact', (req, res) => {
    res.redirect('/contact-me');
});

module.exports = indexRouter;