const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')

router.post('/woll', articlesController.woll)
router.post('/cpi', articlesController.cpi)

module.exports = router
