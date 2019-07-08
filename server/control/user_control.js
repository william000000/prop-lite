import user from "../models/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import isEmpty from 'lodash.isempty';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

class User {
    static signup(req, res) {
        if (isEmpty(req.body)) {
            return res.status(400).send({ status: 'error', message: 'Empty fields' });
        }
        const oneUser = user.find(u => u.email === req.body.email);
        if (oneUser) {
            return res.status(400).send({
                status: "error",
                message: "User already exist"
            });
        }
        const newUser = {
            id: user.length + 1,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            isAdmin: false
        }
            const token = jwt.sign({ email: newUser.email }, process.env.secretKey);
            user.push(newUser);
            res.status(201).send({
                status: "success",
                data: {
                    token,
                    newUser
                }
            })
        }
    static signin(req, res) {
        if(isEmpty(req.body)){
            return res.status(400).send({status:'error', message:'Empty fields'});
        }
        const oneUser = user.find(user => user.email === req.body.email && user.password === req.body.password);
            if (!oneUser) {
                return res.status(400).send({ status: 400, error: "invalid user account" })
            }
            else {
            const token = jwt.sign({ id: oneUser.id }, process.env.secretkey);
            res.status(200).send({
                status: 200,
                token: token,
                data: oneUser
            });
        }
    }
}

export default User;

