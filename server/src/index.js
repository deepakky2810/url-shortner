const express = require("express");
const app = express();
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const { setResponseContentTypeJson } = require("./middlewares/middlewares");

app.use(bodyParser.json());
app.use(cors());
app.use(setResponseContentTypeJson);
app.use("/", routes);

const serverPort = 4445;
app.listen(serverPort, () => {
  console.log(`Server is running at port ${serverPort}`);
});

// mySql
//   .connect()
//   .then(() => {
//     console.log("Connected to mysql...");
//     app.use("/", routes);
//     app.listen(serverPort, () => {
//       console.log(`Server is running at port ${serverPort}`);
//     });
//   })
//   .catch((e) => {
//     console.error("Error connecting mysql...");
//     process.exit();
//   });
