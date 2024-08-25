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
};
