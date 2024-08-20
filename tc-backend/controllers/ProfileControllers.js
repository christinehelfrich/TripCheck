const ProfileModel = require("../models/ProfileModel")
const express = require("express");
const app = express()
const { createSecretToken } = require("../middleware/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.getProfiles = async (req, res) => {
    const profiles = await ProfileModel.find()
    res.send(profiles)
}

module.exports.getProfileById = async (req, res) => {
    const {id} = req.params
    const profile = await ProfileModel.findById(id)
    res.send(profile)
}

module.exports.saveProfile = async (req, res) => {
    const profile = req.body
    const email = profile.email
    console.log('email', email)
    const existingUser = await ProfileModel.findOne({email});
    console.log('existingUser', existingUser)
    if (existingUser) {
        res.status(400).send({msg: "User with that email already exists!"});
    } else {
        ProfileModel.create(profile)
        .then((data) => {
            const token = createSecretToken(data._id);
            res.cookie("token", token, {
              withCredentials: true,
              httpOnly: false,
            });
            console.log("Saved Successfully...")
            res.status(201).send(data)
        }).catch((err) => {
            console.log(err);
            res.status(400).send({error: err, msg: "Something went wrong!"});
        })
    }
}

module.exports.updateProfile = (req, res) => {
    const {id} = req.params
    const profile = req.body

    ProfileModel.findByIdAndUpdate(id, profile)
    .then(() => res.send(profile))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.deleteProfile = (req, res) => {
    const {id} = req.params

    ProfileModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}