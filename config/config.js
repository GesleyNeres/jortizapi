require('dotenv').config()

console.log('aqui', process.env.APP_DATABASE_DB)
module.exports = {
  development: {
    /* storage: "db/cotton_db.sqlite",
    dialect: "sqlite" */
    "username":process.env.APP_DATABASE_USER,
    "password": process.env.APP_DATABASE_PASSWORD,
    "database": process.env.APP_DATABASE_DB,
    "host": process.env.APP_DATABASE_HOST,
    "dialect": "postgres",
    
  }
}
