const names = /^\S[A-Za-z]{1,}$/;
const email = /^\S+@[\w\-]+\.[A-Za-z ]{2,}$/;
const passwd = /^[A-Za-z0-9]{5,}$/;
const phoneNumber = /^\d{10}$/
const address = /^[A-Za-z]{2,}$/;

class UserValidation{
    static validateSignup(req,res,next){
        try{
            if (!email.test(req.body.email)) throw new Error("email must be valid");
            if (!names.test(req.body.first_name)) throw new Error('your first name is invalid');
            if (!names.test(req.body.last_name)) throw new Error('your last name is invalid');
            if (!passwd.test(req.body.password)) throw new Error('password should be at least 6 characters long');
            if (!phoneNumber.test(req.body.phoneNumber)) throw new Error('phone number should be valid ten numbers');
            if (!address.test(req.body.address)) throw new Error('address is invalid');
            next();
        }catch(error){
            res.status(400).send({
                status:"error",
                message: error.message
            })
        }
        
    }
    static validateLogin(req,res,next){
        try{
            if (!email.test(req.body.email)) throw new Error("email must be valid");
            if (!passwd.test(req.body.password)) throw new Error('password should be at least 6 characters long');
            next();
        }catch(error){
            res.status(400).send({status:"error", message:error.message});
        }

    }
}
export default UserValidation;