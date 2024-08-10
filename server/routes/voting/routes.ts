import express from "express";
import { validate } from "express-validation";
import votingValidators from "./validators";
import votingControllers from "./controllers"


const votingRoutes = express.Router();

//cast vote routes
votingRoutes.post('/castVote',
    validate(votingValidators.castVote, {}, { abortEarly: false }),
    votingControllers.castVote

);
export default votingRoutes;

