const express = require("express");
const router = express.Router();

router.get("/", (rreq, res, next) => {
  res.status(200).json({
    message: "Orders page",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: `Order: ${id}`,
  });
});

module.exports = router;
