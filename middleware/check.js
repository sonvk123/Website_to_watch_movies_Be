const fs = require("fs");

const DATA_PATH_token = "../Backend/data/userToken.json";
// const DATA_PATH_token = "../data/userToken.json";

const Token = {
  all: function (DATA_PATH) {
    return JSON.parse(fs.readFileSync(DATA_PATH_token, "utf8"));
  },
};

const data = Token.all();

let token;

data.map((value) => {
  if (value.userId === "User 01") {
    token = value.token;
  }
});

// Middleware kiểm tra xác thực đã đăng nhập
exports.checkAuthentication = (req, res, next) => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const token_req = req.query.token;

  if (token_req !== token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  next();
};
