const userController = require('../controller/user.controller');
const router = require('express').Router()

router.post('/',userController.createUser);

module.exports = router