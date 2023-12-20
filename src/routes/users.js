const User = require("../models/user");
const { getAllUsers, getUserById, addUser, login, refreshToken } = require("../controllers/user");
const jwt = require("jsonwebtoken");
const routes_users = [
  {
    method: "GET",
    path: "/users",
    options: {
      auth: "jwt",
    },
    handler: getAllUsers,
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: getUserById,
  },
  {
    method: "POST",
    path: "/users",
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
    handler: refreshToken,
  },
  {
    method: "GET",
    path: "/",
    options: {
      auth: "jwt",
    },
    handler: async (request, h) => {
      return "Welcome to homepage";
    },
  },
];

module.exports = routes_users;
