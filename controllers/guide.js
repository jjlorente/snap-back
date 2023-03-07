const mongoose = require("mongoose");
const Guide = require("../models/Guide");

const findAllGuides = (req,res) => {
    Guide.find((err, guides) => {
        err && res.status(500).send(err.message);

        res.status(200).json(guides);
    })
};

const findById = (req,res) => {
    Guide.findById(req.params.id, (err,gd) => {
        err && res.status(500).send(err.message);

        res.status(200).json(gd);
    })
}

module.exports = { findAllGuides, findById };