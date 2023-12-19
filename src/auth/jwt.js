const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = (server) => {
  server.auth.strategy("jwt", "jwt", {
    key: "10", // Ganti dengan kunci rahasia Anda yang sebenarnya
    validate: async (decoded, request, h) => {
      try {
        const user = await User.findByPk(decoded.id);

        if (!user) {
          return { isValid: false };
        }

        return { isValid: true, credentials: user };
      } catch (error) {
        return { isValid: false };
      }
    },
  });

  server.auth.default("jwt");
};
