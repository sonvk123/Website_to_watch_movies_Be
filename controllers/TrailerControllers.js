const TrailerVideo = require("../models/TrailerModels");

exports.postMoviesTrailer = (req, res) => {
  const { film_id } = req.body; // Lấy giá trị id từ body
  if (!film_id) {
    // Kiểm tra nếu không có genreId
    return res.status(400).send({ message: "Not found film_id parram" });
  }
  
  TrailerVideo.postTrailer(film_id, (data) => {
    if (!data || data.length === 0) {
      // Kiểm tra nếu không tìm thấy genre_name phù hợp
      return res.status(404).send({ message: "Not found video" });
    }
    res.json(data).sendStatus(200)
  });
};

