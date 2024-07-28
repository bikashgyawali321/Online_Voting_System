import { AnySchema } from 'joi';
import { Joi } from "express-validation"

export function ElectionValidator(): AnySchema {
    return Joi.object({
        electionId: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().allow(null),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        status: Joi.string().required()



    });
}