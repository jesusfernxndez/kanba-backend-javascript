const { RandomNumberController } = require('../controllers/bingo.controller');

const router = require('express').Router();

router.get('/number', RandomNumberController)

module.exports = router