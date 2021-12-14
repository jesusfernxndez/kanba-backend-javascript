const { CreateBingoGame, RandomNumber, WinBingoGame } = require('../controllers/bingo.controller');

const router = require('express').Router();

router.post('/new_bingo', CreateBingoGame)
router.get('/number/:id_game', RandomNumber)
router.get('/win/:id_game/:id_card', WinBingoGame)

module.exports = router