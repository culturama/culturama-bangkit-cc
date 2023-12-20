// Definisikan model untuk tabel 'users'
const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");
const jwt = require("jsonwebtoken");

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
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
User.prototype.generateAccessToken = function () {
  return jwt.sign({ id: this.id_user, name: this.name }, process.env.JWT_SECRET, { expiresIn: "15m" });
};

User.prototype.generateRefreshToken = function () {
  return jwt.sign({ id: this.id_user, name: this.name }, process.env.JWT_SECRET);
};
// await sequelize.async(); // Sinkronkan model dengan tabel di database
module.exports = User;
