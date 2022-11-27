const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')

router.post('/woll', articlesController.woll)
router.post('/sha1', articlesController.sha1)
router.post('/sha256', articlesController.sha256)
router.post('/sha512', articlesController.sha512)
router.post('/md5', articlesController.md5)
router.post('/cpi', articlesController.cpi)
router.post('/wc', articlesController.wc)

module.exports = router
