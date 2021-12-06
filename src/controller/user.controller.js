const {badRequest, error, success} = require('../config/response')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const {successToken} = require("../config/response");
const {SECRET_KEY} = require("../config/secret");
const {badAuthentication} = require("../config/response");

async function findOne(email) {
    return await User.findOne({
        where: {
            email: email
        }
    })
}
exports.createUser = (req, res) => {
    if(!req.body){
        return res.status(400).send(badRequest)
    }
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    const {name,email} = req.body
    const user = {
        name: name,
        email: email,
        password: hashPassword
    }
    User.create(user).then(data => {
        return res.status(200).send(success(data))
    }).catch(err => {
        return res.status(500).send(error(err.message))
    })
}

exports.signIn = async (req,res) => {
    if(!req.body){
        return res.status(400).send(badRequest)
    }
    const findUser = await findOne(req.body.email)
    if(!findUser){
        return res.status(500).send(error('Not found'))
    }
    if (!bcrypt.compareSync(req.body.password, findUser.password)) {
        res.status(401).json(badAuthentication('Authentication failed. Wrong password.'));
    }
    const userData = {
        email: findUser.email,
        name: findUser.name,
        id: findUser.id
    }
    const token = jwt.sign({userData}, SECRET_KEY ,{expiresIn: '300d'});
    return res.status(200).send(successToken(token))
}