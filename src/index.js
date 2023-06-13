const express = require("express");
const app = express();
require("dotenv").config();
const server = require("./config/server");

// Built-in middleware to parse json
app.use(express.json());

// Start server and connect DB
server(app);
