const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
    designer: String,
    price: Number,
    size: Number
})
module.exports = mongoose.model("Game",
    gameSchema)