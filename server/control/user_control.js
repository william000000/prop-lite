import user from "../models/user";
import jwt from "jsonwebtoken";
import isEmpty from 'lodash.isempty';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();


class User {
    static signup(req, res) {
        if (isEmpty(req.body)) {
            return res.status(400).send({ status: 'error', message: 'Empty fields' });
        }
        const oneUser = user.find(u => u.email === req.body.email);
        if (oneUser) {
            return res.status(400).send({
                status: "error",
                message: "User aready exist"
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
            const hash = bcrypt.hashSync(req.body.password,10);
            newUser.password = hash;
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
        const oneUser = user.find(user => user.email === req.body.email);
        const findPassword = bcrypt.compareSync(req.body.password, oneUser.password);
        if(!findPassword){
            return res.status(400).send({ status: 400, error: "Wrong password" });
        }
            if (oneUser) {
                const token = jwt.sign({ email: oneUser.email }, process.env.secretkey);
                res.status(200).send({
                    status: 200,
                    token: token,
                    data: oneUser
                });
            }
            else {
                return res.status(400).send({ status: 400, error: "invalid user account" })
        }
    }
}

export default User;

