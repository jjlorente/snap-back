const mongoose = require("mongoose");
const Card = require("../models/Card");

const findAllCards = (req,res) => {
    Card.find((err, cards) => {
        err && res.status(500).send(err.message);

        res.status(200).json(cards);
    })
};

const findById = (req,res) => {
    Card.findById(req.params.id, (err,card) => {
        err && res.status(500).send(err.message);
        res.status(200).json(card);
    })
}

const addCard = (req, res) => {
    let card = new Card ({
        name: req.body.name,
        hability: req.body.hability,
        img: req.body.img
    });

    card.save((err, crd) => {
        err && res.status(500).send(err.message);

        res.status(200).json(crd);
    })
}

module.exports = { findAllCards, findById , addCard};