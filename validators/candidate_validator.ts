import { AnySchema } from "joi";
import { Joi } from "express-validation";
import { UserValidator } from "./user_validator";

export function CandidateValidator(): AnySchema {
    return Joi.object({
        ...UserValidator().describe().keys, // Spread the keys from the UserValidator
        candidateId: Joi.string().required(),
        electionId: Joi.string().required(),
        description: Joi.string().allow(null),
        votes: Joi.number().integer().allow(null),
        candidatePhotoUrl: Joi.string().allow(null),
    });
}
