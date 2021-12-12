const userController = require('../controller/user.controller');
const {verifyToken} = require("../middlewares/auth");
const router = require('express').Router()

router.post('/login',userController.signIn);
router.use(verifyToken)
router.post('/change-password',userController.changePassword)
module.exports = router