const Joi = require('joi');


const newEmployeeValidationSchema = Joi.object({
    employee_name: Joi.string()
        .min(3)
        .max(100)
        .required(),

    gender: Joi.string()
        .valid('male', 'female')
        .required(),

    address_1: Joi.string()
        .min(3)
        .max(100)
        .required(),

    address_2: Joi.string()
        .min(3)
        .max(100),

    city: Joi.string()
        .min(3)
        .max(100)
        .required(),

    state: Joi.string()
        .min(3)
        .max(100)
        .required(),

    country: Joi.number()
        .integer()
        .required(),

    is_active: Joi.boolean()
        .default(true)
}).unknown(true);


const updateEmployeeDataValidationSchema = Joi.object({
    employee_name: Joi.string()
        .min(3)
        .max(100),

    gender: Joi.string()
        .valid('male', 'female'),

    address_1: Joi.string()
        .min(3)
        .max(100),

    address_2: Joi.string()
        .min(3)
        .max(100),

    city: Joi.string()
        .min(3)
        .max(100),

    state: Joi.string()
        .min(3)
        .max(100),

    country: Joi.number()
        .integer(),

    is_active: Joi.boolean()
        .default(true)
}).unknown(true);

const validateForNew = () => {
    return (req, res, next) => {

        const { value, error } = newEmployeeValidationSchema.validate(req.body);
        const valid = error == null;

        if (valid) {
            next();
        } else {
           
            console.log('error2', error.message);
            res.status(422).json({ erro: error.message });
        }
    };

}
const validateForUpdate = () => {
    return (req, res, next) => {

        const { value, error } = updateEmployeeDataValidationSchema.validate(req.body);
        console.log('error1', value);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            //const { details } = error;
            console.log('error2', error.message);
            res.status(422).json({ erro: error.message });
        }
    };

}

module.exports =
{
    validateForNew,
    validateForUpdate

}
