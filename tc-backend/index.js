const express = require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const profileRoutes = require("./routes/ProfileRoute")
const itineraryRoutes = require("./routes/ItineraryRoute")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 5002

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("HI!!")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))

app.use("/api", profileRoutes)
app.use("/api", itineraryRoutes)

app.listen(PORT, () => console.log(`Listening at ${PORT}`))