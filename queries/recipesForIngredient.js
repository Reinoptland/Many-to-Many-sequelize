const Ingredient = require("../Ingredient/model");
const RecipeIngredient = require("../RecipeIngredient/model");
const Recipe = require("../Recipe/model");

async function getRecipesForIngredient() {
  const carrot = await Ingredient.findOne({
    where: {
      name: "Flour"
    },
    include: [{ model: RecipeIngredient, include: [Recipe] }]
  });

  console.log(carrot.dataValues);
  const recipes = carrot.dataValues.recipe_ingredients.map(recipeIngredient => {
    console.log(recipeIngredient.dataValues);
    return recipeIngredient.dataValues.recipe;
  });

  console.log("ONLY RECIPES", recipes);
}

getRecipesForIngredient();
