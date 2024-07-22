const {Router} = require("express");
const { login } = require("../controllers/AuthControllers");
const {getProfiles, saveProfile, deleteProfile, updateProfile, getProfileById} = require("../controllers/ProfileControllers")
const { isPasswordValid, encryptPassword } = require("../middleware/ProfileMiddleware")
const router = Router()

router.get("/profiles", getProfiles);
router.get("/profile/:id", getProfileById)
router.post("/profile", isPasswordValid, encryptPassword, saveProfile);
router.put("/profile/:id", updateProfile)
router.delete("/profile/:id", deleteProfile)
router.post("/login", login)

module.exports = router