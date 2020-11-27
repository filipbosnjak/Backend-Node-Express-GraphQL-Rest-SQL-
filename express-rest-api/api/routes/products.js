const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET request",
  });
}); //Everything after /products is targeted and handled here

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "POST request",
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
