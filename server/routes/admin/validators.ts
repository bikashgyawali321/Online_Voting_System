
import { Joi } from "express-validation";
const assignRole = {
    body: Joi.object({

        role: Joi.string().valid('voter', 'candidate').required(),


    }),

};
export default {
    assignRole
}