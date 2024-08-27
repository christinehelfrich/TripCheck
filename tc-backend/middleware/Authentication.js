const Profile = require("../models/ProfileModel")
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.requireAuth = async (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization) {
    return res.status(401).json({error: "Authorization token required"});
  }

  const token = authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_KEY
    )

    const {_id} = decodedToken;
    
    req.profile = await Profile.findOne({_id}).select("_id");
    next()
  } catch (error) {
    return res.status(401).json({error: "User token has not been verified... Please log in again."})
  }
}