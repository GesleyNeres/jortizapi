const Sequelize = require('sequelize')
const database = require("../lib/database");

const EmployeeModel = database.define('app_employees',
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
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


module.exports = EmployeeModel