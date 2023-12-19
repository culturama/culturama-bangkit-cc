// module.exports = db_pool.promise();
require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql", // Gantilah dengan tipe database yang sesuai
  logging: false, // Untuk menonaktifkan logging query (opsional)
});

module.exports = sequelize;
