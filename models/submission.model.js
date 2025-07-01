const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
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
        required: [true, "Please choose submission type"]
    },

    title: {
        type: String,
        required: [true, "Please enter a title"]
    },

    pdfFile: {
        type: String,
        required: [true, "Please upload a submission PDF"]
    },

    details: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

const Submission = mongoose.model("Submission", submissionSchema)

module.exports = Submission