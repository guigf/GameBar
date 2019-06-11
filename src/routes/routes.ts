const express = require("express");
const controller = require("../controller/JogoController.ts");
const router = express.Router();

router.get("/listarJogos", controller.list_all_games);
router.get("/encontrarJogo", controller.find_game);

module.exports = router;
