const Movies = require("./Movies");

const paginate = require("../utils/Paging");

const path = require("path");

const DATA_PATH = path.join("src", "data", "movieList.json");

// const DATA_PATH = "../src/data/movieList.json";

module.exports = class MoviesRating {
  static getMoviesRating(pageSize, currentPage, cb) {
    const data = Movies.all(DATA_PATH);
    if (data) {
      // popularity giảm dần
      data.sort((a, b) => a.vote_average - b.vote_average);

      const { totalRecords, totalPages, currentPageData } = paginate(
        data,
        pageSize,
        currentPage
      );

      cb({ currentPageData, totalPages });
    }
  }
};

