const {Router} = require("express");
const {getItineraries, saveItinerary, deleteItinerary, updateItinerary, getItineraryById, getItinerariesByProfileId} = require("../controllers/ItineraryControllers")
const router = Router()
const {uploadFile} = require("../middleware/FileHandlingMiddleware");
const { requireAuth } = require("../middleware/Authentication");

router.get("/itineraries", requireAuth, getItineraries);
router.get("/itineraries/:id", requireAuth, getItinerariesByProfileId)
router.get("/itinerary/:id", requireAuth, getItineraryById)
//router.post("/profile", isPasswordValid, encryptPassword, saveProfile);
router.post("/itinerary", requireAuth, uploadFile.single('itineraryImage'), saveItinerary);
router.put("/itinerary/:id", requireAuth, uploadFile.single('itineraryImage'), updateItinerary)
router.delete("/itinerary/:id", requireAuth, deleteItinerary)



module.exports = router

