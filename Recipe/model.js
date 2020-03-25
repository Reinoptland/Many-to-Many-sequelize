const Sequelize = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  name: Sequelize.STRING,
  instructions: Sequelize.TEXT
});

module.exports = Recipe;
