const { uploadSingleFile } = require("../services/fileService");
const {
  createACustomer,
  createArrayCustomer,
  getAllCustomers,
  updateACustomer,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../services/customerService");
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, image, description } = req.body;

    let imageURL = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
      console.log(result);
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      image: imageURL,
      description,
    };
    let customer = await createACustomer(customerData);
    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },

  postArrayCustomer: async (req, res) => {
    let result = await createArrayCustomer(req.body.customers);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    }
    return res.status(500).json({
      errorCode: -1,
      data: result,
    });
  },

  getGetAllCustomers: async (req, res) => {
    console.log(req.query);
    let { limit, page } = req.query;
    let result = null;
    if (limit && page) {
      result = await getAllCustomers(limit, page);
    } else {
      result = await getAllCustomers();
    }
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    }
    return res.status(500).json({
      errorCode: -1,
      data: null,
    });
  },
  putUpdateACustomer: async (req, res) => {
    const { id, name, email, address } = req.body;
    let result = await updateACustomer(id, name, email, address);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        result: result,
      });
    }

    return res.status(500).json({
      errorCode: -1,
      data: null,
    });
  },

  deteleACustomer: async (req, res) => {
    let { id } = req.body;
    let result = await deleteACustomer(id);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        result: result,
      });
    }

    return res.status(500).json({
      errorCode: -1,
      data: null,
    });
  },

  deteleArrayCustomer: async (req, res) => {
    let { customerIds } = req.body;
    let result = await deleteArrayCustomer(customerIds);

    if (result) {
      return res.status(200).json({
        errorCode: 0,
        result: result,
      });
    }

    return res.status(500).json({
      errorCode: -1,
      data: null,
    });
  },
};
