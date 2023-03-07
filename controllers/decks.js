const mongoose = require("mongoose");
const Deck = require("../models/Deck");
const cardModel = require("../models/Card")

module.exports = {

    findAllDecks: async (request,response) => {
        try {
            const decks = await Deck.find({});

            let deckCardsPromises = [];
            decks.forEach(deck => {
                cards = deck.cards.map(async (card) =>{
                    return cardModel.findOne({"_id":card});
                })
                deckCardsPromises.push(cards)
            })
    
            for (num in deckCardsPromises) {
                let cardsDeck = await Promise.all(deckCardsPromises[num]);
                cardsDeck.sort((a,b)=> a.cost - b.cost);
                decks[num].cards = cardsDeck;
            }
            
            response.json(decks).end();
        } catch(error) {
            return response.status(500).json({error: "Error en recoger decks"}).end();
        }

    },

    findById: async (req,res) => {
        Deck.findById(req.params.id, (err,dek) => {
            err && res.status(500).send(err.message);
            res.status(200).json(dek);
        })
    }

}