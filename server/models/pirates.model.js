const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PirateSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Your Pirate needs a name Captain!"]
    },
    image: {
        type: String,
        required: [true, "Your Pirate needs a picture Captain!"]
    },
    chests: {
        type: Number,
        required: [true, "We need to know how many chests your pirate has Captain!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Your Pirate needs a catch phrase Captain!"]
    },
    crewPos: {
        type: String,
        required: [true, "Your Pirate needs to have a position in the crew Captain!"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, {timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;