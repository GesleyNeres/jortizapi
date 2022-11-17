const Sequelize = require('sequelize')
const database = require("../lib/database");
const crypt = require('../utils/crypt')

const ServiceModel = database.define('app_services',
    {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '0.00'
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        }
    }
)

ServiceModel.beforeCreate(function (model) {
    model.name = crypt.encrypt(model.name),
    model.description = crypt.encrypt(model.description),
    model.price= crypt.encrypt(model.price)
  });
  

module.exports = ServiceModel