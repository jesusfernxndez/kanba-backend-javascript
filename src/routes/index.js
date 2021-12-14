const router = require('express').Router()
const HealthCheckController = require('../controllers/index.controller')

router.get('/', HealthCheckController)

module.exports = router