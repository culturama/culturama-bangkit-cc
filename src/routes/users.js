const User = require("../models/user");
const { getAllUsers, getUserById, addUser, login } = require("../controllers/user");
const jwt = require("jsonwebtoken");
const routes_users = [
  {
    method: "GET",
    path: "/users",
    // options: {
    //   auth: "jwt",
    // },
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
  {
    method: "GET",
    path: "/private",
    options: {
      auth: false,
    },
    handler: async (request, h) => {
      try {
        // Mendapatkan token dari header
        const authHeader = request.headers.authorization;
        if (!authHeader) {
          return h.response({ error: "Unauthorized" }).code(401);
        }

        // Mendapatkan token dari header
        const token = authHeader.split(" ")[1];

        // Verifikasi token JWT
        const decoded = jwt.verify(token, "kuncirahasia");

        // Mendapatkan data user dari database
        const user = await User.findByPk(decoded.id);

        if (!user) {
          return h.response({ error: "User not found" }).code(401);
        }

        // Mengembalikan data yang memerlukan otentikasi
        return { message: "Rute ini memerlukan otentikasi!", user: { id: user.id_user, name: user.name, email: user.email } };
      } catch (error) {
        console.error(error);
        return h.response({ error: "Unauthorized" }).code(401);
      }
    },
  },
];

module.exports = routes_users;
