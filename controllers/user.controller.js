const User = require("../models/user.model")
const jwt = require("jsonwebtoken")

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: "", password: ""}

    // incorrect email
    if (err.message === "Incorrect email") {
        errors.email = "That email is not registered"
    }

    // incorrect password
    if (err.message === "Incorrect password") {
        errors.password = "The password is not correct"
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = "Email already exists"
        return errors
    }
    // validation errors
    if (err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, "Tehama Awards", {
        expiresIn: maxAge
    })
}


const getSignIn = (req, res) => {
    res.render("pages/signin", {title: "Sign In", errors: ""});
}

const getSignUp = (req, res) => {
    res.render("pages/signup", {title: "Sign Up", errors: ""});
}

const postSignUp = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = createToken(user._id)
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).redirect("/submission")
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).render("pages/signup", {title: "Sign Up", errors: errors});
    }
}

const postSignIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).redirect("/submission")
    } 
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).render("pages/signin", {title: "Sign Ip", errors: errors});
    }
}

const getSignOut = (req, res) => {
    res.cookie("jwt", "", {maxAge: 1});
    res.redirect("/")
}


module.exports = {
    getSignIn,
    getSignUp,
    postSignUp,
    postSignIn,
    getSignOut
}