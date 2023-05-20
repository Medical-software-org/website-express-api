const express = require("express");
var cors = require("cors");
const serverless = require("serverless-http");
const emailListRouter = require("./services/email-list/email-list-routes");

// todo: make request to firbase, secure firebase

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/.netlify/functions/api", emailListRouter);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
