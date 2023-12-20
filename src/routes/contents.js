const { getAllContents, getContentById } = require("../controllers/content");
const routes_contents = [
  {
    method: "GET",
    path: "/contents",
    options: {
      auth: false,
    },
    handler: getAllContents,
  },
  {
    method: "GET",
    path: "/contents/{id}",
    handler: getContentById,
  },
];

module.exports = routes_contents;
