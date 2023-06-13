const express = require("express");
const app = express();
require("dotenv").config();
const server = require("./config/server");
const attachModels = require("./middlewares/attach-models");
const routes = require("./v1/routes");

// Built-in middleware to parse json
app.use(express.json());

// Attach models
app.use(attachModels);

// App routes
app.use(routes);

// Start server and connect DB
server(app);
