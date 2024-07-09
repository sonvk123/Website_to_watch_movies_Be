const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

const { checkAuthentication } = require("./middleware/check");

app.use(bodyParser.json()); // Cho phép Express đọc dữ liệu từ JSON body

const browseRouter = require("./routes/browseRouter");

const TrailerRouter = require("./routes/TrailerRouter");

const searchRouter = require("./routes/searchRouter");

app.use("/", checkAuthentication);

app.use(browseRouter.routes);

app.use(TrailerRouter.routes);

app.use(searchRouter.routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
