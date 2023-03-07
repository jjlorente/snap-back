const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: { type: String, required: true},
    cards: { type: Array, required: true},
    guide: { type: String , required: true},
    tier: { type: String, required: true },
    pool: { type: String, required: true }
});

module.exports = Deck = mongoose.model('Deck', DeckSchema);