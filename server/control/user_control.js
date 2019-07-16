import user from "../models/user";
import jwt from "jsonwebtoken";
import isEmpty from 'lodash.isempty';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import users from '../database/MyQueries';
import execute from '../database/execute';
import executeQuery from "../database/execute";
import { Pool } from 'pg';

dotenv.config();


class User {
    /**
    *
    * @param {object} req
    * @param {object} res
    * @returns signup when user not exist
    */
    static async signup(req, res) {
        if (isEmpty(req.body)) {
            return res.status(400).send({ status: 'error', message: 'Empty fields' });
        }
        const { email, first_name, last_name, password, phoneNumber, address } = req.body;
        const exist = await executeQuery(users.isExist, [email]);
        if (exist[0]) {
            return res.status(401).send({ status: 'error', message: 'User already exist!' });
        }
        const hashPass = bcrypt.hashSync(password, 10);
        const newUser = [
            email,
            first_name,
            last_name,
            hashPass,
            phoneNumber,
            address
        ];
        const createUser = await executeQuery(users.create, newUser);
        const token = jwt.sign({ email: createUser[0].email }, process.env.secretkey);
        const keepToken = await executeQuery(users.generateToken,[token , email]);
        if (createUser) {
            return res.status(201).send({ status: 'success', token, data:{first_name,last_name} });
        }
    }
    static signin(req, res) {
        if (isEmpty(req.body)) {
            return res.status(400).send({ status: 'error', message: 'Empty fields' });
        }


        try {
            const oneUser = user.find(us => us.email === req.body.email);
            console.log(oneUser.password);
            const findPassword = bcrypt.compareSync(req.body.password, oneUser.password);
            if (!findPassword) {
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

        catch (e) {
            res.status(400).send({ status: 401, error: "invalid data" })
        }

    }
}

export default User;

