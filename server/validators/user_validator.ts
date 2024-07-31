import { AnySchema } from "joi";
import { Joi } from "express-validation";

export function UserValidator(): AnySchema {
    return Joi.object({
        id: Joi.string().allow(null),
        username: Joi.string().required(),
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
        age: Joi.number().integer().allow(null),
        isEmailVerified: Joi.boolean().required(),
        phoneNumber: Joi.string().allow(null),
        isPhoneNumberVerified: Joi.boolean().allow(null),
        userPhoto: Joi.string().optional(),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
        isAdmin: Joi.bool().required(),
    });
}
