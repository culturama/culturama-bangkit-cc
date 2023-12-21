const { getAllArticles, getArticleById } = require("../controllers/articles");
const routes_articles = [
  {
    method: "GET",
    path: "/article",
    handler: getAllArticles,
  },
  {
    method: "GET",
    path: "/article/{id}",
    handler: getArticleById,
  },
];

module.exports = routes_articles;
