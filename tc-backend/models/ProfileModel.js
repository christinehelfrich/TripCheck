const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    photo: {
        type: String
    },
    skills: {
        type: Array
    },
    hourlyWage: {
        type: String
    },
    area: {
        type: String,
        required: true
    },
    isUnder21: {
        type: Boolean
    },
    experience: {
        type: String,
    },
    isWorkerProfileType: {
        type: Boolean,
        required: true
    },
    isEmployerProfileType: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isSuperUser: {
        type: Boolean,
        default: false
    }

    
})

module.exports = mongoose.model("Profile", profileSchema)