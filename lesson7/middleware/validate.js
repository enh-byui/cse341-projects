const validator = require("../helpers/validate");

const saveProduct = async (req, res, next) => {
  const validationRule = {
    name: "required|string",
    description: "required|string",
    price: "required|numeric",
    category: "required|string",
    manufacturer: "required|string",
    inStock: "required|boolean",
    brand: "required|string",
    color: "required|string",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveOrder = async (req, res, next) => {
  const validationRule = {
    customerId: "required|numeric",
    orderDate: "required|date",
    totalPrice: "required|numeric",
    paymentMethod: "required|string",
    paymentStatus: "required|string",
    shippingAddress: "required|string",
    shippingStatus: "required|string",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveProduct,
  saveOrder,
};
