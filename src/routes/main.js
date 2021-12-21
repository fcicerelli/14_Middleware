let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController')
let adminMiddleware = require('../middlewares/adminUsers')

router.get('/', controller.index)
router.get('/admin', adminMiddleware,controller.admin)

module.exports = router
