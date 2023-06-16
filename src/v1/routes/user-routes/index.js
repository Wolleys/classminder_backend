const express = require("express");
const router = express.Router();

// Import User controllers
const {
    getOneUser,
    getAllUsers,
    createNewUser,
    updateOneUser,
} = require("../../../controllers/user-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { userSchema } = require("../../../validation/user-schema");
const { updateUserSchema } = require("../../../validation/user-schema/update");

// User routes
// 1. Create a new user
router.post("/", validateSchema(userSchema), createNewUser);

// 2. Get all users
router.get("/", getAllUsers);

// 3. Get one user by id
router.get("/:userId", getOneUser);

// 4. Update one user by id
router.patch("/:userId", validateSchema(updateUserSchema), updateOneUser);

module.exports = router;
