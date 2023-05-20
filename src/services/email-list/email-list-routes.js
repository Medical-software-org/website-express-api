const express = require("express");
const { emailListSignUp } = require("./validation-shemas");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const validatedData = await emailListSignUp.validate(req.body);
    res.json(validatedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
