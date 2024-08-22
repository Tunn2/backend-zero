const express = require("express");
const routerAPI = express.Router();

const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.send("Hello world with api!");
});

routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "hello world with first api",
  });
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI;
