const Sequelize = require("sequelize");
const db = require("../db");

const RecipeIngredient = db.define("recipe_ingredient", {
  recipeId: Sequelize.INTEGER,
  ingredientId: Sequelize.INTEGER,
  optionalIngredient: Sequelize.BOOLEAN
});

module.exports = RecipeIngredient;
