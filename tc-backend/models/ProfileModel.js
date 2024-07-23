const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    bio: {
        type: String
    },
    password: {
        type: String,
        required: true
    }

    
})

module.exports = mongoose.model("Profile", profileSchema)