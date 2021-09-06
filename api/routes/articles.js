const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')


router.post('/sites', articlesController.sites)
router.post('/woll', articlesController.woll)

module.exports = router
