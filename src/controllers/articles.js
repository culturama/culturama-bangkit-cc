const Article = require("../models/articles");
const getAllArticles = async (request, h) => {
  try {
    const articles = await Article.findAll();
    const response = h.response({
      status: "success",
      message: "Successfully to show the articles",
      data: articles,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return h
      .response({
        status: "failed",
        message: "Filed to show the articles",
      })
      .code(500);
  }
};

const getArticleById = async (request, h) => {
  const articleId = request.params.id;

  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      return h.response("Article not found").code(404);
    }

    const response = h.response({
      status: "success",
      message: "Successfully get the article",
      data: article,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get article",
    });
    response.code(500);
    return response;
  }
};

module.exports = { getAllArticles, getArticleById };
