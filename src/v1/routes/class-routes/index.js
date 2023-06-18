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
const { verifyToken } = require("../../../middlewares/auth/jwt");
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { classSchema } = require("../../../validation/class-schema");

// Class routes
// 1. Create a new class
router.post("/", verifyToken, validateSchema(classSchema), createNewClass);

// 2. Get all classes
router.get("/", verifyToken, getAllClasses);

// 3. Get one class by id
router.get("/:classId", verifyToken, getOneClass);

// 4. Update one class by id
router.patch(
    "/:classId",
    verifyToken,
    validateSchema(classSchema),
    updateOneClass
);

// 5. Delete one class by id
router.delete("/:classId", verifyToken, deleteOneClass);

module.exports = router;
