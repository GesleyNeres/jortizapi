const log4js = require("log4js")

log4js.configure({
  appenders: {
    app: {
      type: "file",
      filename: "./logs/application_app.log"
    },
    dabase: {
      type: "file",
      filename: "./logs/application_db.log"
    },
    user: {
      type: "file",
      filename: "./logs/application_usr.log"
    },
  },
  categories: { 
    default: { 
      appenders: ["app"], 
      level: "trace"
    },
    dabase: {appenders:['dabase'], level: "trace"},
    user: {appenders:['user'], level: "trace"}
  },
})

const logger = log4js.getLogger();
const loggerdb = log4js.getLogger("dabase");
const loggerusr = log4js.getLogger("user");
module.exports = {logger, loggerdb, loggerusr}