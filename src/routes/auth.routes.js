const userController = require('../controller/user.controller');
const router = require('express').Router()

router.post('/login',userController.signIn);

module.exports = router