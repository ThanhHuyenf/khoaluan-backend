const {badRequest, error, success} = require('../config/response')
const User = require('../models/user.model')

exports.createUser = (req, res) => {
    if(!req.body){
        return res.status(400).send(badRequest)
    }
    const {name,email} = req.body
    const user = {
        name: name,
        email: email
    }
    User.create(user).then(data => {
        return res.status(200).send(success(data))
    }).catch(err => {
        return res.status(500).send(error(err.message))
    })
}