const {Router} = require("express");
const {getItineraries, saveItinerary, deleteItinerary, updateItinerary, getItineraryById} = require("../controllers/ItineraryControllers")
const router = Router()
const {uploadFile} = require("../middleware/FileHandlingMiddleware")

router.get("/itineraries", getItineraries);
router.get("/itinerary/:id", getItineraryById)
//router.post("/profile", isPasswordValid, encryptPassword, saveProfile);
router.post("/itinerary", uploadFile.single('itineraryImage'), saveItinerary);
router.put("/itinerary/:id", updateItinerary)
router.delete("/itinerary/:id", deleteItinerary)


module.exports = router
