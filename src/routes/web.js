const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World va khanh tung!");
});

router.get("/abc", (req, res) => {
  res.send("check abc!");
});

router.get("/bcd", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
