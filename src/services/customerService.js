const Customer = require("../models/customer");

module.exports = {
  createACustomer: async (customerData) => {
    try {
      let result = await Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        description: customerData.description,
        image: customerData.image,
        email: customerData.email,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  createArrayCustomer: async (customerArr) => {
    try {
      let result = await Customer.insertMany(customerArr);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  getAllCustomers: async (limit, page) => {
    try {
      let result = null;
      if (limit && page) {
        let offset = (page - 1) * limit;
        result = await Customer.find({}).skip(offset).limit(limit);
      } else {
        result = await Customer.find({});
      }
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  updateACustomer: async (id, name, email, address) => {
    // console.log(ObjectId(customerData.id));
    try {
      let result = await Customer.updateOne(
        { _id: id },
        {
          name: name,
          email: email,
          address: address,
        }
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  deleteACustomer: async (id) => {
    try {
      let result = await Customer.deleteById(id);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  deleteArrayCustomer: async (arr) => {
    try {
      let result = await Customer.delete({ _id: { $in: arr } });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
