import joi from "joi";

const names = /^[A-Za-z ]{1,}$/;
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const passwd = /^[A-Za-z0-9]{3,}$/;
const address = /^[A-Za-z0-9]{2,}$/;

export const signupSchema = (user)=>{
    const signSchema ={
    id: joi.number().required(),
    first_name: joi.string().alphanum().min(3).regex(names).required(),
    last_name: joi.string().alphanum().min(3).regex(names).required(),
    email: joi.string().email({minDomainAtoms:2}).regex(email).required(),
    password: joi.string().min(3).regex(passwd).required(),
    phoneNumber: joi.number().min(10).required(),
    address:joi.string().min(3).regex(address).required(),
    isAdmin: joi.boolean().required()
    }
    return joi.validate(user,signSchema );
}
