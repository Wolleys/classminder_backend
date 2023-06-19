const express = require("express");
const router = express.Router();

//Import aircraft controllers
const { login, logout } = require("../../../controllers/auth-controller");

//Auth routes
// 1. Login user to their account
router.post("/login", login);

// 2. Logout user from their account
router.get("/logout", logout);

module.exports = router;
