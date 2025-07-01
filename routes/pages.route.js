const express = require("express");
const router = express.Router();
const { getHome, getCategories, getSubmission, getSelection, getSponsorship, getGallery, getProfile } = require("../controllers/pages.controller");
const { postSubmission } = require("../controllers/submission.controller");
const { requireAuth, getCurrentUser } = require("../middlewares/auth.middleware");
const { getUserSubmissions } = require("../middlewares/submission.middleware");


router.get("/", getCurrentUser, getHome);

router.get("/categories", getCurrentUser, getCategories);

router.get("/submission", requireAuth, getCurrentUser, getSubmission);

router.post("/submission", getCurrentUser, postSubmission);

router.get("/selection", getCurrentUser, getSelection);

router.get("/sponsorship", getCurrentUser, getSponsorship);

router.get("/gallery", getCurrentUser, getGallery);

router.get("/profile", requireAuth, getCurrentUser, getUserSubmissions, getProfile);

// 404
router.use((req, res) => {
    res.status(404).render("pages/404", { title: "Page not found"});
});

module.exports = router