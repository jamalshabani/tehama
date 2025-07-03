const organizers = require('../organizers.json');

const getHome = (req, res) => {
    res.render("pages/home", {title: "Home", organizers: organizers});
}

const getCategories = (req, res) => {
    res.render("pages/categories", {title: "Categories"});
}

const getNomination = (req, res) => {
    res.render("pages/nomination", {title: "Nomination"});
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

const getWinners = (req, res) => {
    res.render("pages/winners", {title: "Winners"});
}


module.exports = {
    getHome,
    getCategories,
    getNomination,
    getSelection,
    getSponsorship,
    getGallery,
    getWinners
}