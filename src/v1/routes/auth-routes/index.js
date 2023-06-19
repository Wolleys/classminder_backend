const express = require("express");
const router = express.Router();

//Import auth controllers
const {
    login,
    logout,
    refreshToken,
} = require("../../../controllers/auth-controller");

//Auth routes
// 1. Login user to their account
router.post("/login", login);

// 2. Refresh user token
router.get("/refresh", refreshToken);

// 3. Logout user from their account
router.get("/logout", logout);

module.exports = router;
