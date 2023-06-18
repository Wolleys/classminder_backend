const express = require("express");
const router = express.Router();

// Import Teacher controllers
const {
    getOneTeacher,
    deleteClassId,
    getAllTeachers,
    deleteCourseId,
    createNewTeacher,
    updateOneTeacher,
    deleteOneTeacher,
} = require("../../../controllers/teacher-controller");

// Import middleware
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { teacherSchema } = require("../../../validation/teacher-schema");
const {
    updateTeacherSchema,
} = require("../../../validation/teacher-schema/update");

// Teacher routes
// 1. Create a new teacher
router.post("/", verifyToken, validateSchema(teacherSchema), createNewTeacher);

// 2. Get all teachers
router.get("/", verifyToken, getAllTeachers);

// 3. Get one teacher by id
router.get("/:teacherId", verifyToken, getOneTeacher);

// 4. Update one teacher by id
router.patch(
    "/:teacherId",
    verifyToken,
    validateSchema(updateTeacherSchema),
    updateOneTeacher
);

// 5. Delete one teacher by id
router.delete("/:teacherId", verifyToken, deleteOneTeacher);

// 6. Delete one courseId from teacher by id
router.delete("/:teacherId/courses/:courseId", verifyToken, deleteCourseId);

// 7. Delete one classId from teacher by id
router.delete("/:teacherId/classes/:classId", verifyToken, deleteClassId);

module.exports = router;
