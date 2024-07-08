const express = require("express");

const router = express.Router();

const browseControllers = require("../controllers/browseControllers");

router.get(
  "/api/movies/discover/:genreId",
  browseControllers.getCategoryMovies
);

router.get("/api/movies/top-rate", browseControllers.getMoviesRating);

router.get("/api/movies/trending", browseControllers.getMoviesTrending);

exports.routes = router;
