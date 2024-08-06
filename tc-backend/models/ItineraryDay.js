const ItineraryAttributes = {
    attributeType: String,
    attributeContent: String
}

module.exports.ItineraryDay = {
    date: Date,
    attributes: [ItineraryAttributes]
}


// [
//     {
//         date: "2025-02-21T08:00:00.000Z",
//         attributes: [
//             {
//                 attributeType: 'night',
//                 attributeContent: 'hotel california'
//             },
//             {
//                 attributeType: 'activity',
//                 attributeContent: 'driving racecars'
//             },
//             {
//                 attributeType: 'activity',
//                 attributeContent: 'dinner at nobu'
//             },
//             {
//                 attributeType: 'transportation',
//                 attributeContent: 'rental porsche'
//             },
//         ]
//     },
//     {
//         date: "2025-02-22T08:00:00.000Z",
//     }
// ]