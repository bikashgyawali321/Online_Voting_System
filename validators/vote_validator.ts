import { AnySchema } from "joi";
import { Joi } from "express-validation"

export function VoteValidator(): AnySchema {
    return Joi.object({
        voteId: Joi.string().required(),
        eid: Joi.string().required(),
        cid: Joi.string().required(),
        uid: Joi.string().required(),
        createdAt: Joi.date().required()
    });
}