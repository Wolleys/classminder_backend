const express = require("express");
const router = express.Router();

// Import Class controllers
const {
    getOneClass,
    getAllClasses,
    createNewClass,
    updateOneClass,
    deleteOneClass,
} = require("../../../controllers/class-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { classSchema } = require("../../../validation/class-schema");

// Class routes
// 1. Create a new class
router.post("/", validateSchema(classSchema), createNewClass);

// 2. Get all classes
router.get("/", getAllClasses);

// 3. Get one class by id
router.get("/:classId", getOneClass);

// 4. Update one class by id
router.patch("/:classId", validateSchema(classSchema), updateOneClass);

// 5. Delete one class by id
router.delete("/:classId", deleteOneClass);

module.exports = router;
