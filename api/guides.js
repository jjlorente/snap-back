const DeckController = require ('../controllers/guide');
const express = require('express');

const router = express.Router();

router.get("/all", DeckController.findAllGuides);
router.get("/:id", DeckController.findById);

module.exports = router;