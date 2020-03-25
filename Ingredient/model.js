const Sequelize = require("sequelize");
const db = require("../db");

const Ingredient = db.define("ingredient", {
  name: Sequelize.STRING,
  isVegetarian: Sequelize.BOOLEAN
});

module.exports = Ingredient;
