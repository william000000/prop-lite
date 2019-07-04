import user from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import register from "../validators/signupValidation";
import { loginSchema } from "../validators/signinValidation";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

class User {
    static signup(req, res) {
        const oneUser = user.find(u => u.email === req.body.email);
        if (oneUser) {
            return res.status(400).send({
                status: "error",
                message: "User already exist"
            });
        }
        const newUser = register.validate({
            id: user.length + 1,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            isAdmin: false
        })
        if (newUser.error !== 'null') {
            const token = jwt.sign({ email: newUser.email }, process.env.secretKey);
            user.push(newUser);
            console.log(user);
            res.status(201).json({
                status: "success",
                data: {
                    token,
                    newUser: newUser.value
                }
            })
        }
        else {
            return res.status(400).send({ status: 400, error: newUser.error.details[0].message });
        }
    }
    static signin(req, res) {
        const oneUser = user.find(user => user.email === req.body.email && user.password === req.body.password);
        if (!oneUser) {
            return res.status(400).send({ status: 400, error: "invalid user account" })
        }
        const { error } = loginSchema(req.body);
        if (error) {
            return res.status(400).send({ status: 400, error: error.details[0].message })
        }
        const token = jwt.sign({ id: oneUser.id }, process.env.secretkey);
        if (oneUser) {
            res.status(200).send({
                status: 200,
                token: token,
                data: oneUser
            });
        }
        else {
            res.status(400).send({
                status: 400,
                message: "Invalid credentials"
            })
        }
    }
}

export default User;

