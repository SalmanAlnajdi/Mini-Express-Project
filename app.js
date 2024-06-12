const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./database");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/books", booksRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
