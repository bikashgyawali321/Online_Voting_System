import Joi, { AnySchema } from 'joi';
export function ElectionValidator(): AnySchema {
    return Joi.object({
               eid: Joi.string().required(),
               title: Joi.string().required(),
               description: Joi.string().allow(null),
               startDate:Joi.date().required(),
               endDate: Joi.date().required(),
               status:Joi.string().required()
               


    });
}