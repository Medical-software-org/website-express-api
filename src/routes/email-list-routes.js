const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

module.exports = router;
