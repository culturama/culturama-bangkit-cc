const { ratingCount } = require("../controllers/ratings");
const routes_ratings = [
  {
    method: "GET",
    path: "/ratingCount/{userId}",
    options: {
      auth: false,
    },
    handler: ratingCount,
  },
];

module.exports = routes_ratings;
