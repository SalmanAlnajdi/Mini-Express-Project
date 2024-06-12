const express = require("express");
const upload = require("../../middlewares/multer");
const {
  getAllBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers");

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

booksRouter.get("/:id", getOneBook);

booksRouter.post("/", upload.single("image"), createBook);

booksRouter.put("/:id", upload.single("image"), updateBook);

booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
