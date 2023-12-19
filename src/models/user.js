// Definisikan model untuk tabel 'users'
const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");

const User = sequelize.define(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

// await sequelize.async(); // Sinkronkan model dengan tabel di database
module.exports = User;
