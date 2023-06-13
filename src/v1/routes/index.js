const express = require("express");
const router = express.Router();

// Import route handlers
const v1ClassRouter = require("./class-routes");

// Use route handlers
router.use("/api/v1/classes", v1ClassRouter);

module.exports = router;
