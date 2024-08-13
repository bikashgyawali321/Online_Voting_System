import { AnySchema } from "joi";
import { Joi } from "express-validation";
import { RoleValidator } from './role_validator'

export function UserValidator(): AnySchema {
    return Joi.object({
        id: Joi.string().allow(null),
        username: Joi.string().required(),
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: RoleValidator,
        age: Joi.number().integer().allow(null),
        isEmailVerified: Joi.boolean().required(),
        phoneNumber: Joi.string().allow(null),
        isPhoneNumberVerified: Joi.boolean().allow(null),
        userPhoto: Joi.string().optional(),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
   
    });
}
