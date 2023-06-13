const express = require("express");
const router = express.Router();

// Import Class controllers
const {
    getOneClass,
    getAllClasses,
    createNewClass,
    updateOneClass,
} = require("../../../controllers/class-controller");

// Class routes
// 1. Create a new class
router.post("/", createNewClass);

// 2. Get all classes
router.get("/", getAllClasses);

// 3. Get one class by id
router.get("/:classId", getOneClass);

// 4. Update one class by id
router.patch("/:classId", updateOneClass);

module.exports = router;
