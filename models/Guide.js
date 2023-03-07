const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuideSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String , required: true},
    img: { type: String , required: true}
});

module.exports = Guide = mongoose.model('Guide', GuideSchema);