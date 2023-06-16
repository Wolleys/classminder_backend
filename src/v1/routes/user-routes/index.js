const express = require("express");
const router = express.Router();

// Import User controllers
const {
    getOneUser,
    getAllUsers,
    createNewUser,
} = require("../../../controllers/user-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { userSchema } = require("../../../validation/user-schema");

// User routes
// 1. Create a new user
router.post("/", validateSchema(userSchema), createNewUser);

// 2. Get all users
router.get("/", getAllUsers);

// 3. Get one user by id
router.get("/:userId", getOneUser);

module.exports = router;
