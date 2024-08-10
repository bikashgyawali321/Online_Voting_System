
import { Joi } from "express-validation";
const assignRole = {
    body: Joi.object({
        userId: Joi.string().required(),
        role: Joi.string().valid('voter', 'candidate').required();


    }),

};
export default {
    assignRole
}