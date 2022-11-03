const Sequelize = require('sequelize')
const { logger } = require('../utils/logger')

/* const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/cotton_db.sqlite'
}
) */

const database = new Sequelize(process.env.APP_DATABASE_DB, process.env.APP_DATABASE_USER, process.env.APP_DATABASE_PASSWORD, {
    host: process.env.APP_DATABASE_HOST,
    dialect: 'postgres'
});

logger.info(`Server DATABASE started. | '${__filename}'`)

module.exports = database