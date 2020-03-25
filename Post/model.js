const Sequelize = require("sequelize");
const db = require("../db");
const Category = require("../Category/model");
const PostCategory = require("../PostCategory/model");

const Post = db.define("post", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

Post.belongsToMany(Category, { through: PostCategory });
Category.belongsToMany(Post, { through: PostCategory });

module.exports = Post;
