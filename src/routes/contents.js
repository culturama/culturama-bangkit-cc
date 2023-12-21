const { getAllContents, getContentById } = require("../controllers/content");
const routes_contents = [
  {
    method: "GET",
    path: "/content",
    options: {
      auth: false,
    },
    handler: getAllContents,
  },
  {
    method: "GET",
    path: "/content/{id}",
    handler: getContentById,
  },
];

module.exports = routes_contents;
