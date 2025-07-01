const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const Submission = require("../models/submission.model")


// get submissions
const getUserSubmissions = async (req, res, next) => {
    const token = req.cookies.jwt;
    //check if token exists and valid
    if (token){
        jwt.verify(token, "Tehama Awards", async (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.locals.submissions = null;
                next();
            }
            else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                let submissions = await Submission.find({email: user.email})
                res.locals.submissions = submissions;
                next();
            }
        })
    } 
    else {
        res.locals.submissions = null;
        next();
    }

}

module.exports = { getUserSubmissions };