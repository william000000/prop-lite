import user from "../control/user_control";
import express from "express";

const router = express.Router();

router.post('/signup', user.signup);


export default router;