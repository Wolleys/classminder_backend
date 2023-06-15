const express = require("express");
const router = express.Router();

// Import Teacher controllers
const { createNewTeacher } = require("../../../controllers/teacher-controller");

// Teacher routes
// 1. Create a new teacher
router.post("/", createNewTeacher);

module.exports = router;
