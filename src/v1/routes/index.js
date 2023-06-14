const express = require("express");
const router = express.Router();

// Import route handlers
const v1ClassRouter = require("./class-routes");
const v1CourseRouter = require("./course-routes");
const v1StudentRouter = require("./student-routes");

// Use route handlers
router.use("/api/v1/classes", v1ClassRouter);
router.use("/api/v1/courses", v1CourseRouter);
router.use("/api/v1/students", v1StudentRouter);

module.exports = router;
