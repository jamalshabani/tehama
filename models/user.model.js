const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter your first name"]
    },

    lastname: {
        type: String,
        required: [true, "Please enter your last name"]
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"]
    }
}, { timestamps: true }
)

// function called before saving
// hash password before saving it to the db
userSchema.pre("save", async function (next){
    console.log("User about to be created", this)
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// function called after saving
userSchema.post("save", function (doc, next){
    console.log("New user created");
    next();
});

// static method to login a user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email: email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("Incorrect password");
    }
    throw Error("Incorrect email");
}

const User = mongoose.model("User", userSchema)

module.exports = User