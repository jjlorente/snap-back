const NewController = require ('../controllers/news');
const express = require('express');

const router = express.Router();

router.get("/all", NewController.findAllNews);
router.get("/:id", NewController.findById);
router.post("/add", NewController.addNew);

module.exports = router;