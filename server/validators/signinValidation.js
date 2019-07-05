import joi from "joi";

export const loginSchema = (user) => {
    const signschema = {
        email: joi.string().email({ minDomainAtoms: 2 }),
        password: joi.string().min(6)
    }
    return joi.validate(user, signschema);
}
