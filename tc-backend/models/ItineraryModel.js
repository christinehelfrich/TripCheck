const mongoose = require("mongoose")
const ItineraryDay = require("./ItineraryDay")

const itinerarySchema = new mongoose.Schema({
    itineraryName: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    itineraryImage: {
        type: String  
    },
    description: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
    },
    calendar: {
        type: [ItineraryDay],
        required: false,
        default: []
    }

    
})

module.exports = mongoose.model("Itinerary", itinerarySchema)