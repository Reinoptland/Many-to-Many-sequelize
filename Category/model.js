const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
  name: Sequelize.STRING
});

module.exports = Category;
