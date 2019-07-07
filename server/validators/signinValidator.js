import joi from "joi";

const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const passwd = /^[A-Za-z0-9]{3,}$/;

export const loginSchema = (user) => {
    const signschema = {
        email: joi.string().email({ minDomainAtoms: 2 }).regex(email).required(),
        password: joi.string().min(1).regex(passwd).required()
    }
    return joi.validate(user, signschema);
}
