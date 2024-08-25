const express = require("express");

const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteDeleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFiles,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postArrayCustomer,
} = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteDeleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFiles);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postArrayCustomer);

module.exports = routerAPI;
