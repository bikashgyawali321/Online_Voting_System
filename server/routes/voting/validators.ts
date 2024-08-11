import { Joi } from "express-validation";

const castVote = {
    body: Joi.object({
        voterId: Joi.string().required(),
        electionId: Joi.string().required(),
        candidateId: Joi.string().required(),
    }),
};

const countVotes = {
    params: Joi.object({ electionId: Joi.string().required() }),
};

export default { castVote ,countVotes};