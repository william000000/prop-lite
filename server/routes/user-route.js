import user from "../control/user_control";
import express from "express";

const router = express.Router();

router.post('/signup', user.signup);
router.post('/signin', user.signin);


export default router;