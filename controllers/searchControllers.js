const searchModle = require("../models/searchModle");

exports.postSearch = async (req, res) => {
  try {
    const { keyword, genre, type, language, year } = req.body.data_send;

    if (!keyword) {
      return res.status(400).send({ message: "Not found keyword parameter" });
    }

    const pageSize = 20;
    const currentPage = 1;

    searchModle.postSearch(
      keyword,
      genre,
      type,
      language,
      year,
      pageSize,
      currentPage,
      (data) => {
        res.status(200).send(data);
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
