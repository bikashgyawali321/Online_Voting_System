import express from 'express';
import { validate } from 'express-validation';
import adminControllers from './controller';
import adminValidators from './validators';


const adminRoutes = express.Router();

adminRoutes.put('/assignRole', validate(adminValidators.assignRole, {}, { abortEarly: false }),
    adminControllers.assignRole
);
export default adminRoutes