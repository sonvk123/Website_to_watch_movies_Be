const Movies = require("./Movies");
const paginate = require("../src/utils/Paging");

const DATA_PATH = "../Backend/data/movieList.json";

module.exports = class MoviesTrending {
  static getMoviesTrending(pageSize, currentPage, cb) {
    // static getMoviesTrending(cb) {
    const data = Movies.all(DATA_PATH);
    if (data) {
      // popularity giảm dần
      data.sort((a, b) => b.popularity - a.popularity);

      const { totalRecords, totalPages, currentPageData } = paginate(
        data,
        pageSize,
        currentPage
      );

      cb({ currentPageData, totalPages });
    }
  }
};

