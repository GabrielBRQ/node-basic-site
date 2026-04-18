// controllers/authorController.js
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db");

const getAuthorById = async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getAuthorById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  res.send(`Author Name: ${book.name}`);
};

module.exports = { getAuthorById };