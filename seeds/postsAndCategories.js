const Post = require("../Post/model");
const Category = require("../Category/model");

async function seedPostsAndCategories() {
  const helloWorld = await Post.create({
    title: "Hello world",
    content: "First post, feeling vulnerable. Be kind plz"
  });

  const howToSequelize = await Post.create({
    title: "Sequelize y tho..",
    content: "Define models and stuff, put stuff in your db"
  });

  const postgres = await Post.create({
    title: "Postgres is cool",
    content: "The logo is an elephant, so yeah"
  });

  const javascript = await Post.create({
    title: "JavaScript 101",
    content: "window.alert('hi')"
  });

  const dbCategory = await Category.create({
    name: "Databases"
  });

  const personalCategory = await Category.create({
    name: "Personal"
  });

  const javascriptCategory = await Category.create({
    name: "JS"
  });
}

seedPostsAndCategories();
