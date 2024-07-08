const express = require("express");

const router = express.Router();

const TrailerControllers = require("../controllers/TrailerControllers");

router.post("/api/movies/video", TrailerControllers.postMoviesTrailer);

exports.routes = router;
