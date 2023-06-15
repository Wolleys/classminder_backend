const express = require("express");
const router = express.Router();

// Import Teacher controllers
const {
    getAllTeachers,
    createNewTeacher,
} = require("../../../controllers/teacher-controller");

// Teacher routes
// 1. Create a new teacher
router.post("/", createNewTeacher);

// 2. Get all teachers
router.get("/", getAllTeachers);

module.exports = router;
