const express = require("express");
const router = express.Router();

// Import route handlers
const v1ClassRouter = require("./class-routes");
const v1CourseRouter = require("./course-routes");

// Use route handlers
router.use("/api/v1/classes", v1ClassRouter);
router.use("/api/v1/courses", v1CourseRouter);

module.exports = router;
