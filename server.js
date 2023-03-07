const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/health', (req, res)=>{
    res.status(200).json({status:'OK'}).end();
})

const Cards = require('./api/cards');
const News = require('./api/news');
const Decks = require('./api/decks');
const Guide = require('./api/guides');
app.use('/api/cards', Cards);
app.use('/api/news', News);
app.use('/api/decks', Decks);
app.use('/api/guides', Guide);

mongoose.connect(
    "mongodb://127.0.0.1:27017/marvel-snap",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err,res) => {
        err && console.log("Error on connection to db");
        app.listen(3000, () => {
            console.log("Server connected on http://localhost:3000");
        });
    }
);