const { uploadSingleFile } = require("../services/fileService");
const {
  createACustomer,
  createArrayCustomer,
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
};
