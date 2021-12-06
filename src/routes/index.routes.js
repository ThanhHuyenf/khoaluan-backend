const userController = require('../controller/user.controller');
module.exports = function(app) {
    app.post('/user',userController.createUser);
};