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
    password: {
        type: String,
        required: true
    },
    plans: {
        type: [String],
        default: []
    }

    
})

module.exports = mongoose.model("Profile", profileSchema)