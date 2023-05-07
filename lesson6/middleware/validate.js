const validator = require('../helpers/validate');

const saveProduct = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "description": "required|string",
        "price": "required|numeric",
        "category": "required|string",
        "manufacturer": "required|string",
        "inStock": "required|boolean",
        "brand": "required|string",
        "color": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const saveOrder = async (req, res, next) => {
    const validationRule = {
        "customerId": "required|numeric",
        "orderDate": "required|date",
        "totalPrice": "required|numeric",
        "paymentMethod": "required|string",
        "paymentStatus": "required|string",
        "shippingAddress": "required|string",
        "shippingStatus": "required|string",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}


module.exports = {
    saveProduct, saveOrder
};