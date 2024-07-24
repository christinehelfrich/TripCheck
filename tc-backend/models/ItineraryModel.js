const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({
    itineraryName: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date,
    }

    
})

module.exports = mongoose.model("Itinerary", itinerarySchema)