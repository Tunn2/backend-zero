const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = [];
  return res.render("home.ejs", { users: results });
};

const getABC = (req, res) => {
  res.send("checkABC");
};

const getBCD = (req, res) => {
  res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  if (user) {
    res.render("edit.ejs", { user: user });
  } else {
    res.send("Not exist");
  }
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  await User.create({
    email: email,
    name: name,
    city: city,
  });

  res.send("Create user successfully!!!!");
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
  // res.render("home.ejs");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);
  res.render("delete.ejs", { user: user });
};

const postHandleRemoveUser = async (req, res) => {
  let { userId } = req.body;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getABC,
  getBCD,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
