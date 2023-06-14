const express = require("express");
const router = express.Router();

// Import Course controllers
const {
    getOneCourse,
    getAllCourses,
    createNewCourse,
    updateOneCourse,
} = require("../../../controllers/course-controller");

// Course routes
// 1. Create a new course
router.post("/", createNewCourse);

// 2. Get all courses
router.get("/", getAllCourses);

// 3. Get one course by id
router.get("/:courseId", getOneCourse);

// 4. Update one course by id
router.patch("/:courseId", updateOneCourse);

module.exports = router;
