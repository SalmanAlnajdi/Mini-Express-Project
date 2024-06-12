const notFound = (req, res, next) => {
  return res.status(404).json({ meg: "product not found!!" });
};

module.exports = notFound;
