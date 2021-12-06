const { badAuthentication } = require('../config/response')
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require('../config/secret')
exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send(badAuthentication);
        }
        req.userId = decoded.id;
        next();
    });
};