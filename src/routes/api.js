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
  getGetAllCustomers,
  putUpdateACustomer,
  deteleACustomer,
  deteleArrayCustomer,
} = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteDeleteUserAPI);

routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFiles);

routerAPI.get("/customers", getGetAllCustomers);
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postArrayCustomer);
routerAPI.put("/customers", putUpdateACustomer);
routerAPI.delete("/customers", deteleACustomer);
routerAPI.delete("/customers-many", deteleArrayCustomer);

routerAPI.get("/info", (req, res) => {
  console.log("query ", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("params ", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
