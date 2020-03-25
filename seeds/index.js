const RecipeIngredient = require("../RecipeIngredient/model");
const Recipe = require("../Recipe/model");
const Ingredient = require("../Ingredient/model");

// write a function to put data in our database
async function seedDataBase() {
  const carrotSoup = await Recipe.create({
    name: "Carrot soup",
    instructions: "Bake it man"
  });

  const carrotCake = await Recipe.create({
    name: "Carrot cake",
    instructions: "Bake it man"
  });

  const carrot = await Ingredient.create({
    name: "Carrot",
    isVegetarian: true
  });

  const onion = await Ingredient.create({
    name: "Onion",
    isVegetarian: true
  });

  const steak = await Ingredient.create({
    name: "Steak",
    isVegetarian: false
  });

  const flour = await Ingredient.create({
    name: "Flour",
    isVegetarian: true
  });

  RecipeIngredient.create({
    ingredientId: carrot.id,
    recipeId: carrotSoup.id,
    optionalIngredient: false
  });

  RecipeIngredient.create({
    ingredientId: onion.id,
    recipeId: carrotSoup.id,
    optionalIngredient: true
  });

  RecipeIngredient.create({
    ingredientId: carrot.id,
    recipeId: carrotCake.id,
    optionalIngredient: false
  });

  RecipeIngredient.create({
    ingredientId: flour.id,
    recipeId: carrotCake.id,
    optionalIngredient: false
  });
}

seedDataBase();
