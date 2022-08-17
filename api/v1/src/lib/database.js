const Sequelize = require('sequelize')

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/cotton_db.sqlite'
}
)

module.exports = database