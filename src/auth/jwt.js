const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
module.exports = (server) => {
  server.auth.strategy("jwt", "jwt", {
    key: secret, // Ganti dengan kunci rahasia Anda yang sebenarnya
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
