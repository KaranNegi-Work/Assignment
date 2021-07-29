const Joi = require('joi');

const newEmployeeValidationSchema = Joi.object({
        employee_name: Joi.string()
                        .min(3)
                        .max(100)
                        .required(),
        
        gender: Joi.string()
                   .lowercase()
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
                        .lowercase()
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


module.exports ={
    newEmployeeValidationSchema,
    updateEmployeeDataValidationSchema
}