export const ItineraryAttributes = {
    attributeType: String,
    attributeContent: String
}

export const ItineraryDay = {
    date: Date,
    attributes: [ItineraryAttributes]
}

export const itineraryModel = {
    itineraryName: String,
    ownerId: String,
    itineraryImage: String,
    description: String,
    startDate: Date,
    endDate: Date,
    calendar: [ItineraryDay],
}