const express = require("express");
const router = express.Router();

// Import route handlers
const v1UserRouter = require("./user-routes");
const v1ClassRouter = require("./class-routes");
const v1CourseRouter = require("./course-routes");
const v1StudentRouter = require("./student-routes");
const v1TeacherRouter = require("./teacher-routes");

// Use route handlers
router.use("/api/v1/users", v1UserRouter);
router.use("/api/v1/classes", v1ClassRouter);
router.use("/api/v1/courses", v1CourseRouter);
router.use("/api/v1/students", v1StudentRouter);
router.use("/api/v1/teachers", v1TeacherRouter);

module.exports = router;
