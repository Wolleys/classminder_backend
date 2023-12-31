const express = require("express");
const router = express.Router();

// Import Student controllers
const {
    getOneStudent,
    getAllStudents,
    deleteCourseId,
    createNewStudent,
    updateOneStudent,
    deleteOneStudent,
} = require("../../../controllers/student-controller");

// Import middleware
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { studentSchema } = require("../../../validation/student-schema");
const {
    updateStudentSchema,
} = require("../../../validation/student-schema/update");

// Student routes
// 1. Create a new student
router.post("/", verifyToken, validateSchema(studentSchema), createNewStudent);

// 2. Get all students
router.get("/", verifyToken, getAllStudents);

// 3. Get one student by id
router.get("/:studentId", verifyToken, getOneStudent);

// 4. Update one student by id
router.patch(
    "/:studentId",
    verifyToken,
    validateSchema(updateStudentSchema),
    updateOneStudent
);

// 5. Delete one student by id
router.delete("/:studentId", verifyToken, deleteOneStudent);

// 6. Delete one courseId from student by id
router.delete("/:studentId/courses/:courseId", verifyToken, deleteCourseId);

module.exports = router;
