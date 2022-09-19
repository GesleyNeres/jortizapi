
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
      unique: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    address:{
      type: Sequelize.STRING,
      allowNull: false
    },
    city:{
      type: Sequelize.STRING,
      allowNull: false
    },
    state:{
      type: Sequelize.STRING,
      allowNull: false
    },
    cost:{
      type: Sequelize.STRING,
      allowNull: false
    },
    total_revenue:{
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    details:{
      type: Sequelize.STRING,
      allowNull: false
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
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Date.now(),
      allowNull: false
    }
  }
)

module.exports = ClientModel
