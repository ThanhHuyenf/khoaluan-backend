const { badAuthentication } = require('../config/response')
const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require('../config/secret')
exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send(badAuthentication);
        }
        res.locals.userId = decoded.userData.user_id;
        next();
    });
};
exports.permit = function (...permittedRoles) {
    return (request, response, next) => {
        const { user } = request

        if (user && permittedRoles.includes(user.role)) {
            next()
        } else {
            response.status(403).json({message: "Forbidden"})
        }
    }
}