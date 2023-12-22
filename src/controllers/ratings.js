const { op } = require("sequelize");
const sequelize = require("./../config/database_conf");
const Rating = require("../models/ratings");
const Content = require("../models/content");

const ratingCount = async (request, h) => {
  const { userId } = request.params;

  try {
    // Ambil kategori dari database
    const categories = await Rating.findAll({
      attributes: [[sequelize.fn("DISTINCT", sequelize.col("Category")), "Category"]],
    });

    // Mencari kategori dengan rating tertinggi untuk user tertentu
    const categoryWithMaxRating = await Rating.findOne({
      attributes: ["Category", [sequelize.fn("AVG", sequelize.col("Place_Ratings")), "averageRating"]],
      where: {
        User_Id: userId,
      },
      group: ["Category"],
      order: [[sequelize.fn("AVG", sequelize.col("Place_Ratings")), "DESC"]],
      limit: 1,
    });

    if (!categoryWithMaxRating) {
      return { message: "Tidak ada konten ditemukan untuk pengguna." };
    }

    // Menampilkan data dari database berdasarkan kategori dengan rating tertinggi
    const contentWithMaxRating = await Rating.findAll({
      where: {
        User_Id: userId,
        Category: categoryWithMaxRating.Category,
      },
    });

    category = categoryWithMaxRating.Category;

    const contents = await Content.findAll({
      where: {
        Category: category,
      },
    });

    return { contents };

    // return {
    //   userId: userId,
    //   //   categories: categories.map((item) => item.Category),
    //   maxRating,
    //   //   averageRating: categoryWithMaxRating.averageRating,
    //   //   contentWithMaxRating: contentWithMaxRating,
    // };
  } catch (error) {
    console.error(error);
    return h.response({ error: "Kesalahan Server Internal" }).code(500);
  }

  //return { categories };
};

module.exports = { ratingCount };
