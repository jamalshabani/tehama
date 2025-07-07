const mongoose = require("mongoose")

const nominationSchema = new mongoose.Schema({
    nomination_type: {
        type: String,
        required: true
    },

    nomination_category: {
        type: String,
        required: true
    },

    nomination_subcategory: {
        type: String,
        required: true
    },

    nominator_name: {
        type: String,
        required: true
    },

    nominator_email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Please enter a valid email"]
    },

    nominator_phone: {
        type: String,
        required: true
    },

    nominee_name: {
        type: String,
        required: true
    },

    nominee_email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Please enter a valid email"]
    },

    nominee_phone: {
        type: String,
        required: true
    },

    website: {
        type: String,
        required: false
    },
    
    nomination_reason: {
        type: String,
        required: true
    },

    supporting_evidence: {
        type: String,
        required: true
    },

    impact: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },
        
    innovation: {
        type: String,
        required: true
    },
        
    sustainability: {
        type: String,
        required: true
    },

    inclusivity: {
        type: String,
        required: true
    },

    reference_one_name: {
        type: String,
        required: true
    },

    reference_one_phone: {
        type: String,
        required: true
    },

    reference_one_email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Please enter a valid email"]
    },

    reference_two_name: {
        type: String,
        required: true
    },

    reference_two_phone: {
        type: String,
        required: true
    },

    reference_two_email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Please enter a valid email"]
    },

    nomination_files: {
        type: String,
        required: true
    },

}, { timestamps: true }
)

const nomination = mongoose.model("nomination", nominationSchema)

module.exports = nomination