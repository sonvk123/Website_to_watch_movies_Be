const Movies = require("./Movies");
const paginate = require("../src/utils/Paging");

const DATA_PATH_movieList = "../Backend/data/movieList.json";
const DATA_PATH_genreList = "../Backend/data/genreList.json";

const movieList = Movies.all(DATA_PATH_movieList);
const genreList = Movies.all(DATA_PATH_genreList);

module.exports = class CategoryMovies {
  static getCategoryMovies(genreId, pageSize, currentPage, cb) {
    let genre_name;
    let movieListGenre = [];

    // kiểm tra xem genreId có thuộc genreList hay không
    const checkID = (array, id) => array.some((genre) => genre.id === id);

    const result = checkID(genreList, genreId);

    movieList.map((value) => {
      value.genre_ids.map((value_id) => {
        if (value_id === genreId) {
          movieListGenre.push(value);
        }
      });
    });
    
    const { totalRecords, totalPages, currentPageData } = paginate(
      movieListGenre,
      pageSize,
      currentPage
    );

    // lấy dữ liệu Tên thể loại
    const category = genreList.filter((value) => {
      return value["id"] === genreId;
    });
    // Tên thể loại đã lấy được
    genre_name = category[0]["name"];
    cb({
      results: currentPageData,
      page: 1,
      total_pages: totalPages,
      genre_name: genre_name,
      check: result,
    });
  }
};
