const express = require("express");
const router = express.Router();

// Import Class controllers
const { createNewClass } = require("../../../controllers/class-controller");

// Class routes

// 1. Create a new class
router.post("/", createNewClass);

module.exports = router;
