const Sequelize = require("sequelize");
const db = require("../db");

const PostCategory = db.define("post_category", {
  isMainCategory: Sequelize.BOOLEAN
});

module.exports = PostCategory;
