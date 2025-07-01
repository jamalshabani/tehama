const express = require("express");
const router = express.Router();
const { getSignIn, getSignUp, postSignUp, postSignIn, getSignOut } = require("../controllers/user.controller");
const { getCurrentUser } = require("../middlewares/auth.middleware");

router.get("/signin", getCurrentUser, getSignIn);

router.get("/signup", getCurrentUser, getSignUp);

router.post("/signup", postSignUp);

router.post("/signin", postSignIn);

router.get("/signout", getSignOut);

module.exports = router