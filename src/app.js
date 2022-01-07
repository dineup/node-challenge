const express = require("express");
const { addRoutes } = require("./routes/index.js");
const { applyMiddleware } = require("./middleware/index.js");

const app = express();

applyMiddleware(app);
addRoutes(app);

module.exports = { app };
