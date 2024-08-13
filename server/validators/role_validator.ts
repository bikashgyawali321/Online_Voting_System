import { Joi } from "express-validation";

export function RoleValidator() {
    return Joi.string().valid('SUPER_ADMIN',
        'ADMIN',
        'VOTER',
        'CANDIDATE',
        'USER'
    );
}