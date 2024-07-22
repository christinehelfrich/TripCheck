const ProfileModel = require("../models/ProfileModel")
const express = require("express");
const app = express()

module.exports.getProfiles = async (req, res) => {
    const profiles = await ProfileModel.find()
    res.send(profiles)
}

module.exports.getProfileById = async (req, res) => {
    const {id} = req.params
    const profile = await ProfileModel.findById(id)
    res.send(profile)
}

module.exports.saveProfile = (req, res) => {
    const profile = req.body.profile

    ProfileModel.create(profile)
    .then((data) => {
        console.log("Saved Successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.updateProfile = (req, res) => {
    const {id} = req.params
    const profile = req.body.profile

    ProfileModel.findByIdAndUpdate(id, profile)
    .then(() => res.send("Updated Successfully..."))
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