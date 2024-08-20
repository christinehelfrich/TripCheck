const express = require("express")
const ProfileModel = require("../models/ProfileModel")
const bcrypt = require("bcrypt")
const { createSecretToken } = require("../middleware/SecretToken");

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ msg: "Please enter all the fields" });
        }
    
        const user = await ProfileModel.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .send({ msg: "User with this email does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
          return res.status(400).send({ msg: "Incorrect password." });
        }
        //const token = jwt.sign({ id: user._id }, "passwordKey");
        const token = createSecretToken(user._id);
        res.json({ token: token, user: user });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}