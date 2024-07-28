import Joi, { AnySchema } from "joi";

export function VoteValidator(): AnySchema {
    return Joi.object({
        vid: Joi.string().required(),
        eid: Joi.string().required(),
        cid: Joi.string().required(),
        uid: Joi.string().required(),
        createdAt: Joi.date().required()

    });
}