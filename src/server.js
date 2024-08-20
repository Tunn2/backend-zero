require("dotenv").config();

const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require("./config/database");

const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

//config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })); //for form data

configViewEngine(app);

app.use("/", webRoutes);

//test connection
// connection.query("SELECT * FROM Users", (err, results, fields) => {});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} and ${hostname}`);
});
