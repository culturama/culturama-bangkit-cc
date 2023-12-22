const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");
const Rating = sequelize.define(
  "Rating",
  {
    Rating_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Place_Id: {
      type: DataTypes.INTEGER,
    },
    User_Id: {
      type: DataTypes.INTEGER,
    },
    Category: {
      type: DataTypes.STRING,
    },
    Place_Ratings: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Rating;
