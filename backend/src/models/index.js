const databaseConfig = require("../database/connection.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.country = require('../country/model.js')(sequelize, Sequelize)
db.city = require('../city/model.js')(sequelize, Sequelize)
db.school = require('../school/model.js')(sequelize, Sequelize)

module.exports = db;    