const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const path = require("node:path");

const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

// app.use("/", indexRouter);

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, message: "This is the about page!" });
});

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

