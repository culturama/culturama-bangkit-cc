const { getAllUsers, getUserById, addUser, login, refreshToken } = require("../controllers/user");

const routes_users = [
  {
    method: "GET",
    path: "/users",
    handler: getAllUsers,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: getUserById,
  },
  {
    method: "POST",
    path: "/register",
    options: {
      auth: false,
    },
    handler: addUser,
  },
  {
    method: "POST",
    path: "/login",
    options: {
      auth: false,
    },
    handler: login,
  },
  {
    method: "POST",
    path: "/refresh-token",
    options: {
      auth: "jwt",
    },
    handler: refreshToken,
  },
];

module.exports = routes_users;
