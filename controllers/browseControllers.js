const CategoryMovies = require("../models/categoryModel");
const MoviesRating = require("../models/ratingModel");
const MoviesTrending = require("../models/trendingModel");

exports.getCategoryMovies = (req, res) => {
  const genreId = +req.params.genreId;
  let pageSize = 20;
  let currentPage = 1;

  if (!genreId) {
    // Kiểm tra nếu không có genreId
    return res.status(400).send({ message: "Not found gerne parram" });
  }

  CategoryMovies.getCategoryMovies(genreId, pageSize, currentPage, (data) => {
    if (data.result === false) {
      // Kiểm tra nếu không tìm thấy genre_name phù hợp
      return res.status(400).send({ message: "Not found that gerne id" });
    }

    // Trả về dữ liệu thành công
    res.status(200).send({
      results: data.results,
      page: data.page,
      total_pages: data.total_pages,
      genre_name: data.genre_name,
      check: data.check,
    });
  });
};

exports.getMoviesRating = (req, res) => {
  let pageSize = 20;
  let currentPage = 1;

  MoviesRating.getMoviesRating(pageSize, currentPage, (data) =>
    res.send({
      results: data.currentPageData,
      page: currentPage,
      total_pages: data.totalPages,
    })
  );
};

exports.getMoviesTrending = (req, res) => {
  let pageSize = 20;
  let currentPage = 1;

  MoviesTrending.getMoviesTrending(pageSize, currentPage, (data) => {
    res.send({
      results: data.currentPageData,
      page: currentPage,
      total_pages: data.totalPages,
    });
  });
};
