const User = require("./../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
//menampilkan semua data user-----------------------------------------------------------------------------------
const getAllUsers = async (request, h) => {
  try {
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
    const users = await User.findAll();
    const response = h.response({
      status: "success",
      message: "Successfully to show, the user",
      data: users,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get users",
    });
    response.code(500);
    return response;
  }
};

// menampilkan data user berdasarkan id ----------------------------------------------------------------

const getUserById = async (request, h) => {
  const userId = request.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return h.response("User not found").code(404);
    }

    const response = h.response({
      status: "success",
      message: "Successfully get the user",
      data: user,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "Filed",
      message: "Filed to get users",
    });
    response.code(500);
    return response;
  }
};

// Tambah data user  ----------------------------------------------------------------
const addUser = async (request, h) => {
  try {
    const { name, email, password } = request.payload;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Add data to database using Sequelize
    const user = await User.create({ name, email, password: hashedPassword });

    // Return success response
    return {
      status: "success",
      message: "User added successfully",
      data: user.toJSON(),
    };
  } catch (error) {
    console.error("Error adding user:", error);

    // Return error response
    return h
      .response({
        status: "failed",
        message: "Failed to add user",
        error: error.message, // Optionally include more details about the error
      })
      .code(500);
  }
};

const login = async (request, h) => {
  try {
    const { email, password } = request.payload;

    // Temukan user berdasarkan username
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return h.response({ error: "User not found" }).code(401);
    }

    // Bandingkan password yang di-hash
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return h.response({ error: "Invalid credentials" }).code(401);
    }

    // Hasil autentikasi sukses, buat token JWT
    const token = jwt.sign({ id: user.id_user, name: user.name, email: user.email }, "kuncirahasia");

    const response = h.response({
      status: "success",
      message: "Login successful",
      data: user,
      token,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: "Filed",
      error: "Login filed",
    });
    response.code(500);
    return response;
  }
};

// JWT secret key
// const secretKey = "10";
// const login = async (request, h) => {
//   try {
//     const { email, password } = request.payload;

//     // Find the user by username
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return h.response({ error: "User not found" }).code(401);
//     }

//     // Compare hashed password
//     const isValidPassword = await bcrypt.compare(password, user.password);

//     if (!isValidPassword) {
//       return h.response({ error: "Invalid credentials" }).code(401);
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user.id, username: user.username }, secretKey);

//     //const user1=

//     // return { token };
//     const response = h.response({
//       status: "success",
//       message: "Login successful",
//       data: user,
//       token,
//     });
//     response.code(200);
//     return response;
//   } catch (error) {
//     console.error(error);
//     return h.response({ error: "Internal Server Error" }).code(500);
//   }
// };

module.exports = { getAllUsers, getUserById, addUser, login };