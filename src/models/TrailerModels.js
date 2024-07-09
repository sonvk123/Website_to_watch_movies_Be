const Movies = require("./Movies");
const path = require("path");

const DATA_PATH = path.join("src", "data", "videoList.json");

// const DATA_PATH = "../data/videoList.json";

let data_movies;
module.exports = class TrailerVideo {
  static postTrailer(film_id, cb) {
    const data = Movies.all(DATA_PATH);
    // duyệt qua để lấy videos của film_id
    const film = data.find((value) => value.id === film_id);

    // nếu phim có video Trailer
    if (film) {
      const videos = film.videos.filter(
        (value) =>
          value.official === true &&
          value.site === "YouTube" &&
          (value.type === "Trailer" || value.type === "Teaser")
      );
      // duyệt qua để lấy video Trailer gần đây nhất
      let movie = null;
      if (videos.length > 0) {
        movie = videos.reduce((latest, current) => {
          const currentDate = new Date(current.published_at);
          const latestDate = latest ? new Date(latest.published_at) : null;

          if (!latestDate || currentDate > latestDate) {
            return current;
          }
          return latest;
        });
      }
      cb(movie);
    } else {
      cb([]);
    }
  }
  static getTrailer(cb) {
    cb({ data_movies });
  }
};
