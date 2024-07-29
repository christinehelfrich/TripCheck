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
    }

    
})

module.exports = mongoose.model("Itinerary", itinerarySchema)