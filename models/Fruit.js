const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/connection");

const Fruit = db.define("fruit", {
  name: DataTypes.STRING,
  color: DataTypes.STRING,
});

module.exports = Fruit;
