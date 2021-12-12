const userController = require('../controller/user.controller');
const {verifyToken} = require("../middlewares/auth");
const router = require('express').Router()

router.post('/',userController.createUser);
router.use(verifyToken)
router.put('/',userController.updateUser);
router.get('/',userController.getUser)
module.exports = router