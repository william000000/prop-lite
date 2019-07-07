import joi from "joi";

const register = joi.object().keys({
    id: joi.number().required(),
    first_name: joi.string().alphanum().min(3).required(),
    last_name: joi.string().alphanum().min(3).required(),
    email: joi.string().email({minDomainAtoms:2}).required(),
    password: joi.string().min(6).required(),
    phoneNumber: joi.string().min(10).required(),
    address:joi.string().min(3).required(),
    isAdmin: joi.boolean().required()
});

export default register;