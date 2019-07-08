import user from "../control/user_control";
import express from "express";
import UserValidation from '../validations/userValidation'

const router = express.Router();

const { validateSignup, validateLogin } = UserValidation;

router.post('/signup', validateSignup,user.signup);
router.post('/signin', validateLogin,user.signin);


export default router;