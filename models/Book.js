const mongoose = require("mongoose");
const { type } = require("os");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 50 },
  image: {
    type: String,
    default: "media/booktest.png",
  },
});

module.exports = mongoose.model("book", bookSchema);
