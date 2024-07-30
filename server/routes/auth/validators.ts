import { Joi } from "express-validation";
import { UserValidator } from "../../validators/user_validator";
import { CandidateValidator } from "../../validators/candidate_validator";
import { VoterValidator } from "../../validators/voter_validator";

const login = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required()
    }),
};

const registerUser = {
    body: Joi.object({ user: UserValidator().required() }),
};

const registerCandidate = {
    body: Joi.object({
        candidate: CandidateValidator().required(),
    }),
};

const registerVoter = {
    body: Joi.object({ voter: VoterValidator().required() }),
};

export default { login, registerUser, registerCandidate, registerVoter };
