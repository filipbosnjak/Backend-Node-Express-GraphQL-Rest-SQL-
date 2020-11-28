const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET request",
  });
}); //Everything after /products is targeted and handled here

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };

  res.status(200).json({
    message: "POST request",
    createdProduct: req.body,
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: `Product ${id}`,
  });

  res.status(200).json({
    message: "POST request",
  });
});

module.exports = router;
