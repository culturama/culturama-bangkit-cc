const { DataTypes } = require("sequelize");
const sequelize = require("./../config/database_conf");
const Article = sequelize.define(
  "Article",
  {
    Article_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Article_Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image_Link: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Article;
