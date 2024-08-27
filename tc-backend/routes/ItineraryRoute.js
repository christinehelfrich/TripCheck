const {Router} = require("express");
const {getItineraries, saveItinerary, deleteItinerary, updateItinerary, getItineraryById} = require("../controllers/ItineraryControllers")
const router = Router()
const {uploadFile} = require("../middleware/FileHandlingMiddleware");
const { requireAuth } = require("../middleware/Authentication");

router.get("/itineraries", requireAuth, getItineraries);
router.get("/itinerary/:id", getItineraryById)
//router.post("/profile", isPasswordValid, encryptPassword, saveProfile);
router.post("/itinerary", uploadFile.single('itineraryImage'), saveItinerary);
router.put("/itinerary/:id", uploadFile.single('itineraryImage'), updateItinerary)
router.delete("/itinerary/:id", deleteItinerary)



module.exports = router

