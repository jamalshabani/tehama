const mongoose = require("mongoose")

const nominationSchema = new mongoose.Schema({
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
        required: [true, "Please enter an email"]
    },
    
    category: {
        type: String,
        required: [true, "Please choose a category"]
    },

    submitter: {
        type: String,
        required: [true, "Please choose nomination type"]
    },

    title: {
        type: String,
        required: [true, "Please enter a title"]
    },

    pdfFile: {
        type: String,
        required: [true, "Please upload a nomination PDF"]
    },

    details: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

const nomination = mongoose.model("nomination", nominationSchema)

module.exports = nomination