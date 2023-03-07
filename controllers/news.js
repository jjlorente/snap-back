const mongoose = require("mongoose");
const New = require("../models/New");

const findAllNews = (req,res) => {
    New.find((err, news) => {
        err && res.status(500).send(err.message);

        res.status(200).json(news);
    })
};

const findById = (req,res) => {
    New.findById(req.params.id, (err,nw) => {
        err && res.status(500).send(err.message);

        res.status(200).json(nw);
    })
}

const addNew = (req, res) => {
    let n = new New ({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    });

    n.save((err, nw) => {
        err && res.status(500).send(err.message);

        res.status(200).json(nw);
    })
}

module.exports = { findAllNews, findById , addNew};