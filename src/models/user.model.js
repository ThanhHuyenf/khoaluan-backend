const Sequelize = require('sequelize')

const sequelize = require('../config/mysql')

const User = sequelize.define('user', {

    // Column-1, user_id is an object with
    // properties like type, keys,
    // validation of column.
    user_id:{

        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement:true,

        // user_id can not be null.
        allowNull:false,

        // For uniquely identify user.
        primaryKey:true
    },

    // Column-2, name
    name: { type: Sequelize.STRING, allowNull:false },

    // Column-3, email
    email: { type: Sequelize.STRING, allowNull:false },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = User