import Joi, { AnySchema } from "joi";

export function CandidateValidator():AnySchema{
    return Joi.object({
        cid: Joi.string().required(),
        eid: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().allow(null),
        votes: Joi.number().allow(null),
        createdAt: Joi.date().allow(null),
        updatedAt: Joi.date().allow(null),
        age: Joi.number().required(),
        verifyCandidateAge:Joi.bool().required(),
        candidatePhotoUrl: Joi.bool().allow(null)

    })
}