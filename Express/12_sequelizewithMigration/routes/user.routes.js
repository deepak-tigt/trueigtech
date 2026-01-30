const UserController = require('../controller/user.conroller')
const Router = require('express')

const router = Router()

router.post('/user/register', UserController.register )
router.post('/user/login',UserController.login)

module.exports = router;