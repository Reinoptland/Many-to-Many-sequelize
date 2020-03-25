const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

module.exports = Post;
