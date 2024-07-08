const searchControllers = require("../controllers/searchControllers");

const express = require("express");

const router = express.Router();

router.post("/api/movies/search", searchControllers.postSearch);

exports.routes = router;
