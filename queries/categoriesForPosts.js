const Post = require("../Post/model");

async function getCategoriesForPost() {
  const post = await Post.findOne({
    where: {
      title: "Sequelize y tho.."
    }
  });

  const categories = await post.getCategories();
  console.log(categories);

  console.log(categories);
}

getCategoriesForPost();
