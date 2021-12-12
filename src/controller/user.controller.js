const {badRequest, error, success} = require('../config/response')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const {successToken} = require("../config/response");
const {SECRET_KEY} = require("../config/secret");
const {badAuthentication} = require("../config/response");

async function findOne(id) {
    return await User.findOne({
        where: {
            user_id: id
        }
    })
}
exports.createUser = (req, res) => {
    if(!req.body){
        return res.status(400).send(badRequest)
    }
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    const {name,email,role,user_id} = req.body
    const user = {
        user_id: user_id,
        role: role,
        name: name,
        email: email,
        password: hashPassword
    }
    User.create(user).then(data => {
        return res.status(200).send(success({message: 'Success create account'}))
    }).catch(err => {
        console.log(err)
        return res.status(500).send(error(err.message))
    })
}

exports.signIn = async (req,res) => {
    if(!req.body){
        return res.status(400).send(badRequest)
    }
    const findUser = await findOne(req.body.user_id)
    if(!findUser){
        return res.status(500).send(error('Not found'))
    }
    if (!bcrypt.compareSync(req.body.password, findUser.password)) {
        res.status(401).json(badAuthentication('Authentication failed. Wrong password.'));
    }
    const userData = {
        email: findUser.email,
        user_id: findUser.user_id,
        role: findUser.role,
    }
    const token = jwt.sign({userData}, SECRET_KEY ,{expiresIn: '300d'});
    return res.status(200).send(successToken(token))
}

exports.changePassword = async (req,res) => {
    if(!req.body.oldPassword && !req.body.newPassword){
        return res.status(400).send(badRequest)
    }
    const findUser = await findOne(res.locals.userId)
    if(!findUser){
        return res.status(500).send(error('Not found'))
    }
    if (!bcrypt.compareSync(req.body.oldPassword, findUser.password)) {
        return res.status(401).json(badAuthentication('Authentication failed. Wrong password.'));
    }
    const hashPassword = await bcrypt.hashSync(req.body.newPassword, 10)
    const resultUpdate = await User.update({
        password: hashPassword
    },{ where: { user_id: res.locals.userId }})
    return res.status(200).send(success({message: 'Success change password'}))
}

exports.updateUser = async (req,res) => {
    const user = req.body
    const findUser = await findOne(res.locals.userId)
    if(!findUser){
        return res.status(500).send(error('Not found'))
    }
    const resultUpdate = await User.update(user,{ where: { user_id: res.locals.userId }})
    return res.status(200).send(success({message: 'Success change userinfo'}))
}

exports.getUser = async (req,res) => {
    const findUser = await findOne(res.locals.userId)
    if(!findUser){
        return res.status(500).send(error('Not found'))
    }
    const user = findUser
    user.password = undefined
    return res.status(200).send(success(user))
}