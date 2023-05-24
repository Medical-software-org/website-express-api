const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const emailListRouter = require("./services/email-list/email-list-routes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/.netlify/functions/api", emailListRouter);

module.exports = app;
module.exports.handler = serverless(app);
