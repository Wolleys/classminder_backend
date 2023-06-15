const express = require("express");
const router = express.Router();

// Import Teacher controllers
const {
    getOneTeacher,
    getAllTeachers,
    createNewTeacher,
    updateOneTeacher,
} = require("../../../controllers/teacher-controller");

// Teacher routes
// 1. Create a new teacher
router.post("/", createNewTeacher);

// 2. Get all teachers
router.get("/", getAllTeachers);

// 3. Get one teacher by id
router.get("/:teacherId", getOneTeacher);

// 4. Update one teacher by id
router.patch("/:teacherId", updateOneTeacher);

module.exports = router;
