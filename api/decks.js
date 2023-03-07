const DeckController = require ('../controllers/decks');
const express = require('express');

const router = express.Router();

router.get("/all", DeckController.findAllDecks);
router.get("/:id", DeckController.findById);

//router.post("/add", CardController.addCard);

module.exports = router;