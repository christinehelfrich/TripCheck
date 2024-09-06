const {Router} = require("express");
const { login, isTokenValid } = require("../controllers/AuthControllers");
const {getProfiles, saveProfile, deleteProfile, updateProfile, getProfileById} = require("../controllers/ProfileControllers")
const { isPasswordValid, encryptPassword } = require("../middleware/ProfileMiddleware");
const { requireAuth } = require("../middleware/Authentication");
const router = Router()

router.get("/profiles", requireAuth, getProfiles);
router.get("/profile/:id", requireAuth, getProfileById)
router.post("/profile", isPasswordValid, encryptPassword, saveProfile);
//router.post("/profile", saveProfile);
router.put("/profile/:id", requireAuth, updateProfile)
router.delete("/profile/:id", requireAuth, deleteProfile)
router.post("/login", login)
router.get("/isTokenvalid", requireAuth, isTokenValid);

module.exports = router
