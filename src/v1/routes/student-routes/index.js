const express = require("express");
const router = express.Router();

// Import Student controllers
const { createNewStudent } = require("../../../controllers/student-controller");

// Student routes
// 1. Create a new student
router.post("/", createNewStudent);

module.exports = router;
