const User = require("../models/user");

const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    erroCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;

  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });

  return res.status(200).json({
    erroCode: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let { email, name, city, userId } = req.body;

  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    erroCode: 0,
    data: user,
  });
};

const deleteDeleteUserAPI = async (req, res) => {
  let { userId } = req.body;
  let result = await User.deleteOne({ _id: userId });
  return res.status(200).json({
    erroCode: 0,
    data: result,
  });
};

const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(404).send("No files were uploaded");
  }

  let result = await uploadSingleFile(req.files.image);
  console.log(result);
  return res.send(result);
};

const postUploadMultipleFiles = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(404).send("No files were uploaded");
  }

  if (Array.isArray(req.files.image)) {
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      erroCode: 0,
      data: result,
    });
  } else {
    return postUploadSingleFileAPI(req, res);
  }
};
module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteDeleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFiles,
};
