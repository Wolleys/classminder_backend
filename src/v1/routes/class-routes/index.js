const express = require("express");
const router = express.Router();

// Import Class controllers
const {
    createNewClass,
    getAllClasses,
} = require("../../../controllers/class-controller");

// Class routes
// 1. Create a new class
router.post("/", createNewClass);

// 2. Get all classes
router.get("/", getAllClasses);

module.exports = router;
