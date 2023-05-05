const validator = require('../helpers/validate');

const saveContact = async (req, res, next) => {
    const validationRule = {
        "firstName": "required|string",
        "lastName": "required|string",
        "email": "required|string|email",
        "favoriteColor": "string",
        "birthday": "string",
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
    saveContact
};