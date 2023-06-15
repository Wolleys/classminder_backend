const express = require("express");
const router = express.Router();

// Import Teacher controllers
const {
    getOneTeacher,
    getAllTeachers,
    createNewTeacher,
} = require("../../../controllers/teacher-controller");

// Teacher routes
// 1. Create a new teacher
router.post("/", createNewTeacher);

// 2. Get all teachers
router.get("/", getAllTeachers);

// 3. Get one teacher by id
router.get("/:teacherId", getOneTeacher);

module.exports = router;
