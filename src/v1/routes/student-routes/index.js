const express = require("express");
const router = express.Router();

// Import Student controllers
const {
    getOneStudent,
    getAllStudents,
    createNewStudent,
} = require("../../../controllers/student-controller");

// Student routes
// 1. Create a new student
router.post("/", createNewStudent);

// 2. Get all students
router.get("/", getAllStudents);

// 3. Get one student by id
router.get("/:studentId", getOneStudent);

module.exports = router;
