const fs = require("fs");

const Movies = {
  all: function (DATA_PATH) {
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  },
};

module.exports = Movies;
