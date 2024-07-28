import Joi, { AnySchema } from "joi";

export function UserValidator(): AnySchema {
    return Joi.object({
        uid: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().allow(null),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
        age: Joi.number().allow(null)


    })
}