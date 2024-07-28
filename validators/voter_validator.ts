import { AnySchema } from "joi";
import { Joi } from "express-validation"

export function VoterValidator(): AnySchema {
    return Joi.object({
        id: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required(),
        emailVerified:Joi.string().required(),
        password: Joi.string().required(),
        fullName: Joi.string().required(),
        role: Joi.string().allow(null),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
        age: Joi.number().required(),
        verifyVoterAge: Joi.bool().required(),
        votingCardPhotoUrl: Joi.string().required(),
        voterPhoto: Joi.string().allow(null),
        phoneNumber: Joi.number().allow(null),
        phoneNumberVerified: Joi.bool().allow(null)
    })
}