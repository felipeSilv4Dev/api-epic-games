const express = require("express");
const gamesController = require("./../controllers/gamesController");
const router = express.Router();

router.route("/").get(gamesController.getAllGames);
router.route("/:id").get(gamesController.getGame);

module.exports = router;
