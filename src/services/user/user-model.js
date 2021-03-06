'use strict';

// user-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const models = Sequelize.models;

module.exports = function(sequelize) {
    const app = this;
    const user = sequelize.define('users', {
        cedula: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        puntos: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                //console.log(models);
                user.belongsTo(models.tipoUsuarios);
                user.belongsToMany(models.pedidos, { through: models.historialPuntos });
            },
        }
    });

    user.sync({ force: true });

    return user;
};