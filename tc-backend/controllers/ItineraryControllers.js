const ItineraryModel = require("../models/ItineraryModel")
const express = require("express");
const app = express()

module.exports.getItineraries = async (req, res) => {
    const itineraries = await ItineraryModel.find()
    res.send(itineraries)
}


module.exports.getItineraryById = async (req, res) => {
    const {id} = req.params
    const Itinerary = await ItineraryModel.findById(id)
    res.send(Itinerary)
}

module.exports.saveItinerary = (req, res) => {
    const itinerary = req.body
    itinerary.itineraryImage = req.file.path

    ItineraryModel.create(itinerary)
    .then((data) => {
        console.log("Saved Successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.updateItinerary = (req, res) => {
    const {id} = req.params
    const itinerary = req.body
    console.log(itinerary.calendar[0])
    if(req?.file?.path !== undefined) {
        itinerary.itineraryImage = req?.file?.path
    }


    ItineraryModel.findByIdAndUpdate(id, itinerary)
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}

module.exports.deleteItinerary = (req, res) => {
    const {id} = req.params

    ItineraryModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"});
    })
}
