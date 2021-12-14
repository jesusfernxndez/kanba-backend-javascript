const { RandomNumber } = require('../controllers/bingo.controller');

const router = require('express').Router();

router.post('/new_bingo', RandomNumber)
router.get('/number', RandomNumber)

module.exports = router