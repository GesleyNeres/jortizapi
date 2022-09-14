
const Sequelize = require('sequelize')
const database = require("../lib/database");
const crypt = require('../utils/crypt')

const ClientModel = database.define('app_clients',
    {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:true
          },
          phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          cost:{
            type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue: 0.00
          },
          status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
          },
          createdAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            allowNull: false
          },
          updatedAt:{
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            allowNull: false
          }
    }
)
ClientModel.beforeCreate(function (model) {
  model.name = crypt.encrypt(mode.name)
});


module.exports = ClientModel
