const {DataTypes} = require("sequelize");

const connection = require("../db/connection");



const  Teams= connection.define("Team", {
    teams: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true, 
    },
    league: {
        type: DataTypes.STRING, 
    },
    manager: {
        type: DataTypes.STRING,
    },
});

module.exports = Team;