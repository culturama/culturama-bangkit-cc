const Content = require("../models/content");
const getAllContents = async (request, h) => {
  try {
    const contents = await Content.findAll();
    const response = h.response({
      status: "success",
      message: "Successfully to show the content",
      data: contents,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error("Error:", error);
    return h
      .response({
        status: "failed",
        message: "Filed to show the content",
      })
      .code(500);
  }
};

const getContentById = async (request, h) => {
  const contentId = request.params.id;

  try {
    const content = await Content.findByPk(contentId);

    if (!content) {
      return h.response("Content not found").code(404);
    }

    const response = h.response({
      status: "success",
      message: "Successfully get the content",
      data: content,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get content",
    });
    response.code(500);
    return response;
  }
};

module.exports = { getAllContents, getContentById };
