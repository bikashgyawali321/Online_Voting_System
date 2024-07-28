import { AnySchema } from "joi";
import { Joi } from "express-validation";

export function AdminValidator(): AnySchema {
    return Joi.object({
        id: Joi.number().integer().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
        permissions: Joi.array().items(Joi.string()).allow(null),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null)
    });
}
