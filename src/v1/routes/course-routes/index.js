const express = require("express");
const router = express.Router();

// Import Course controllers
const { createNewCourse } = require("../../../controllers/course-controller");

// Course routes
// 1. Create a new course
router.post("/", createNewCourse);

module.exports = router;
