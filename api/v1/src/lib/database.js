const Sequelize = require('sequelize')

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/db_posix.sqlite'
}
)

module.exports = database