const express = require("express");
const router = express.Router();
const { getHome, getCategories, getNomination, getSelection, getSponsorship, getGallery, getWinners } = require("../controllers/pages.controller");
const { postSubmission } = require("../controllers/submission.controller");
const { requireAuth, getCurrentUser } = require("../middlewares/auth.middleware");
const { getUserSubmissions } = require("../middlewares/submission.middleware");


router.get("/", getHome);

router.get("/categories", getCategories);

router.get("/nomination", getNomination);

router.post("/submission", postSubmission);

router.get("/selection", getSelection);

router.get("/sponsorship", getSponsorship);

router.get("/gallery", getGallery);

router.get("/winners", getWinners);

// 404
router.use((req, res) => {
    res.status(404).render("pages/404", { title: "Page not found"});
});

module.exports = router