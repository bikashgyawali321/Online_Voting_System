import { AnySchema } from "joi";
import { Joi } from "express-validation"

export function CandidateValidator(): AnySchema {
    return Joi.object({
        id: Joi.string().required(),
        eid: Joi.string().required(),
        fullName: Joi.string().required(),
        description: Joi.string().allow(null),
        votes: Joi.number().allow(null),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
        age: Joi.number().required(),
        verifyCandidateAge: Joi.bool().required(),
        candidatePhotoUrl: Joi.bool().allow(null),
        email: Joi.string().allow(null),
        phoneNumber: Joi.number().allow(null),
         emailVerified: Joi.bool().allow(null),
         phoneNumberVerified: Joi.bool().allow(null),


    })
}