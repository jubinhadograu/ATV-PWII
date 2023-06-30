const sequelize = require('sequelize');

const conection = new sequelize(
    'pw2_api_hospital',
    'root',
    '',
    {
        host: 'localhost',
        port: 3307,
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = conection;