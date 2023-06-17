const express = require("express");
const router = express.Router();

//Import aircraft controllers
const { login } = require("../../../controllers/auth-controller");

//Auth routes
// 1. Login user to their account
router.post("/login", login);

module.exports = router;
