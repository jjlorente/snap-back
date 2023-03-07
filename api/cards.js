const CardController = require ('../controllers/cards');
const express = require('express');

const router = express.Router();

router.get("/all", CardController.findAllCards);
router.get("/:id", CardController.findById);

router.post("/add", CardController.addCard);

module.exports = router;