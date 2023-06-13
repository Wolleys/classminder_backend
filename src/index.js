const express = require("express");
const app = express();
require("dotenv").config();
const server = require("./config/server");
const attachModels = require("./middlewares/attach-models");

// Built-in middleware to parse json
app.use(express.json());

// Attach models
app.use(attachModels);

// Start server and connect DB
server(app);
