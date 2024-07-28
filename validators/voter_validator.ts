import { Joi } from "express-validation";
import { AnySchema } from "joi";
import { UserValidator } from "./user_validator";

export function VoterValidator(): AnySchema {
    return Joi.object({
        ...UserValidator().describe().keys,
        voterId: Joi.string().required(),
        voterCardPhotoUrl: Joi.string().allow(null),
        eligibleToVote: Joi.boolean().required(),
    });
}