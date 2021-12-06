const userController = require('../controller/user.controller');
const router = require('express').Router()
const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')
router.use('/users',userRoutes)
router.use('/',authRoutes)
module.exports = router