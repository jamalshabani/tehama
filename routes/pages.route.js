const express = require("express");
const router = express.Router();
const { getHome, getCategories, getNomination, getSelection, getSponsorship, getGallery, getWinners, getContactUs } = require("../controllers/pages.controller");
const { postNomination } = require("../controllers/nomination.controller");


router.get("/", getHome);

router.get("/categories", getCategories);

router.get("/nomination", getNomination);

router.post("/nomination", postNomination);

router.get("/selection", getSelection);

router.get("/sponsorship", getSponsorship);

router.get("/gallery", getGallery);

router.get("/winners", getWinners);

router.get("/contactus", getContactUs);

// 404
router.use((req, res) => {
    res.status(404).render("pages/404", { title: "Page not found"});
});

module.exports = router