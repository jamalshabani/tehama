const organizers = require('../organizers.json');

const getHome = (req, res) => {
    res.render("pages/home", {title: "Home", organizers: organizers});
}

const getCategories = (req, res) => {
    res.render("pages/categories", {title: "Categories"});
}

const getSubmission = (req, res) => {
    res.render("pages/submission", {title: "Submission"});
}

const getSelection = (req, res) => {
    res.render("pages/selection", {title: "Selection"});
}

const getSponsorship = (req, res) => {
    res.render("pages/sponsorship", {title: "Sponsorship"});
}

const getGallery = (req, res) => {
    res.render("pages/gallery", {title: "Gallery"});
}

const getProfile = (req, res) => {
    res.render("pages/profile", {title: "Profile"});
}


module.exports = {
    getHome,
    getCategories,
    getSubmission,
    getSelection,
    getSponsorship,
    getGallery,
    getProfile
}