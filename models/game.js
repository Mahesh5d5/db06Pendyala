const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
    game_Designer: String,
    price: Number,
    size: Number
})
module.exports = mongoose.model("Game",
    gameSchema)