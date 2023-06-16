const express = require("express");
const router = express.Router();

// Import User controllers
const { createNewUser } = require("../../../controllers/user-controller");

// Import middleware
const { validateSchema } = require("../../../middlewares/validate-schema");

// Import schema
const { userSchema } = require("../../../validation/user-schema");

// User routes
// 1. Create a new user
router.post("/", validateSchema(userSchema), createNewUser);

module.exports = router;
