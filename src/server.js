require("dotenv").config();

const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpLoad = require("express-fileupload");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require("./config/database");

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data
app.use(fileUpLoad());

configViewEngine(app);

app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

(async () => {
  try {
    connection();
    app.listen(port, hostname, () => {
      console.log(`Backend-0 app listening on port ${port} and ${hostname}`);
    });
  } catch (error) {
    console.log("Error connect to db: ", error);
  }
})();
