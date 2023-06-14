const express = require("express");
const router = express.Router();

// Import Course controllers
const {
    createNewCourse,
    getAllCourses,
} = require("../../../controllers/course-controller");

// Course routes
// 1. Create a new course
router.post("/", createNewCourse);

// 2. Get all courses
router.get("/", getAllCourses);

module.exports = router;
