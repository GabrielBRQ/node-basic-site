const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const PORT = 3000;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.use("/", indexRouter);

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});

