const Sequelize = require("sequelize");
const db = require("../db");
const Ingredient = require("../Ingredient/model");
const Recipe = require("../Recipe/model");

const RecipeIngredient = db.define("recipe_ingredient", {
  optionalIngredient: Sequelize.BOOLEAN
});

Ingredient.hasMany(RecipeIngredient);
Recipe.hasMany(RecipeIngredient);
RecipeIngredient.belongsTo(Recipe);
RecipeIngredient.belongsTo(Ingredient);
// Do i need this one as well?
// Ingredient.belongsToMany(Recipe)

module.exports = RecipeIngredient;
