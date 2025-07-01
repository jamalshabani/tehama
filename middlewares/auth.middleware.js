const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    //check if token exists and valid
    if (token){
        jwt.verify(token, "Tehama Awards", (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.redirect("/signin");
            }
            else {
                console.log(decodedToken);
                next();
            }
        })
    } 
    else {
        res.redirect("/signin");
    }
}

// check current user
const getCurrentUser = async (req, res, next) => {
    const token = req.cookies.jwt;
    //check if token exists and valid
    if (token){
        jwt.verify(token, "Tehama Awards", async (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } 
    else {
        res.locals.user = null;
        next();
    }

}

module.exports = { requireAuth, getCurrentUser };