const sequelize = require('sequelize');
const conection = require('../database/database');

const paciente = conection.define(
    'tbl_paciente',
    {
        nomePaciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        telefonePaciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        celularPaciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        emailPaciente:{
            type: sequelize.STRING,
            allowNull: false
        },
        foto:{
            type: sequelize.STRING,
            allowNull: false
        },
        nomeResponsavel:{
            type: sequelize.STRING,
            allowNull: false
        },
        telefoneResponsavel:{
            type: sequelize.STRING,
            allowNull: false
        },
    }
);

//paciente.sync({force:true});

module.exports = paciente