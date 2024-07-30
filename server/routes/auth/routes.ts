import express from "express"
import { validate } from "express-validation"
import authValidators from "./validators"
import authControllers from "./controllers"


const authRoutes = express.Router();



//login route
authRoutes.post('/login',

    validate(authValidators.login, {}, { abortEarly: false }),

    authControllers.login
);

//register route
authRoutes.post('/register',

    validate(authValidators.registerUser, {}, { abortEarly: false }),


    authControllers.registerUser
);


export default authRoutes;