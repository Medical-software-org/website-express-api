const express = require("express");
const serverless = require("serverless-http");
const emailListRouter = require("./routes/email-list-routes");

// todo: make request to firbase, secure firebase

const app = express();

app.use("/.netlify/functions/api", emailListRouter);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
