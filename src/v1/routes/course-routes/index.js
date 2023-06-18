const express = require("express");
const router = express.Router();

// Import Course controllers
const {
    getOneCourse,
    getAllCourses,
    createNewCourse,
    updateOneCourse,
    deleteOneCourse,
} = require("../../../controllers/course-controller");

// Import middleware
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { courseSchema } = require("../../../validation/course-schema");

// Course routes
// 1. Create a new course
router.post("/", verifyToken, validateSchema(courseSchema), createNewCourse);

// 2. Get all courses
router.get("/", verifyToken, getAllCourses);

// 3. Get one course by id
router.get("/:courseId", verifyToken, getOneCourse);

// 4. Update one course by id
router.patch(
    "/:courseId",
    verifyToken,
    validateSchema(courseSchema),
    updateOneCourse
);

// 5. Delete one course by id
router.delete("/:courseId", verifyToken, deleteOneCourse);

module.exports = router;
