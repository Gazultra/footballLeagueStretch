const {DataTypes} = require("sequelize")
const connection = require("../db/connection")

const Manager = connection.define('Manager', {
    managerName: {
        type: DataTypes.STRING, 
    }
});

module.exports = Manager; 