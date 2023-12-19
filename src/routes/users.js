const { getAllUsers, getUserById, addUser, login } = require("../controllers/user");
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
    path: "/users",
    handler: addUser,
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
  },
];

module.exports = routes_users;
