const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: { type: String, required: true},
    hability: { type: String, required: true},
    img: { type: String , required: true},
    power: { type: String, required: true },
    cost: { type: String, required: true }
});

module.exports = Card = mongoose.model('Card', CardSchema);