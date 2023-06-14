const express = require("express");
const router = express.Router();

// Import Student controllers
const {
    createNewStudent,
    getAllStudents,
} = require("../../../controllers/student-controller");

// Student routes
// 1. Create a new student
router.post("/", createNewStudent);

// 2. Get all students
router.get("/", getAllStudents);

module.exports = router;
