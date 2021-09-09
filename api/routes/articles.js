const { Router } = require('express')

const router = Router()

// Initialize Controller
const articlesController = require('../controllers/articlesController')


router.post('/get_public_ip', articlesController.get_public_ip)
router.post('/get_private_ip', articlesController.get_private_ip)
router.post('/get_gateway_ip', articlesController.get_gateway_ip)
router.post('/get_interfaces_list', articlesController.get_interfaces_list)

router.post('/woll', articlesController.woll)
router.post('/cpi', articlesController.cpi)

module.exports = router
