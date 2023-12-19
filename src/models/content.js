const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");
const Content = sequelize.define(
  "Content",
  {
    Place_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Place_Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    City: {
      type: DataTypes.STRING,
    },
    Rating: {
      type: DataTypes.INTEGER,
    },
    Time_Minutes: {
      type: DataTypes.STRING,
    },
    Coordinate: {
      type: DataTypes.STRING,
    },
    Lat: {
      type: DataTypes.STRING,
    },
    Long: {
      type: DataTypes.STRING,
    },
    Image_Link: {
      type: DataTypes.STRING,
    },
    Unnamed1: {
      type: DataTypes.STRING,
    },
    Unnamed2: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Content;
