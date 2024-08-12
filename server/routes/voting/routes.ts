import express from "express";
import { validate } from "express-validation";
import votingValidators from "./validators";
import votingControllers from "./controllers"

const votingRoutes = express.Router();

//cast vote routes
votingRoutes.post('/castVote/:voterId/:candidateId/:electionId',
    validate(votingValidators.castVote, {}, { abortEarly: false }),
    votingControllers.castVote

);
votingRoutes.get('/countVotes',
    validate(votingValidators.countVotes, {}, { abortEarly: false }),
    votingControllers.countVotes

)
export default votingRoutes;

