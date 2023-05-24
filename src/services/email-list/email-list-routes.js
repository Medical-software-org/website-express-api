const express = require("express");
const { emailListSignUp } = require("./validation-shemas");
const admin = require("../../firebase-config");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const validatedData = await emailListSignUp.validate(req.body);
    const ref = admin.database().ref("email-list").push();
    await ref.set(validatedData);
    res.status(201).json({ result: "success", payload: validatedData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
