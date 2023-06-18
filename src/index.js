const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require("cookie-parser");
const server = require("./config/server");
const attachModels = require("./middlewares/attach-models");
const routes = require("./v1/routes");

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Built-in middleware to parse json
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Attach models
app.use(attachModels);

// App routes
app.use(routes);

// Start server and connect DB
server(app);
