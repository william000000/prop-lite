import user from "../models/user";
import jwt from "jsonwebtoken";
import isEmpty from 'lodash.isempty';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import queries from '../database/MyQueries';
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
            return res.status(400).send({ status: 400, message: 'Empty fields' });
        }
        const { email, first_name, last_name, password, phoneNumber, address } = req.body;
        const exist = await executeQuery(queries[0].isExist, [email]);
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
        const createUser = await executeQuery(queries[0].create, newUser);
        const token = jwt.sign({ email: createUser[0].email }, process.env.secretkey);
        if (createUser) {
            return res.status(201).send({
                 status: 201,
                  token, 
                  data:{email,first_name,last_name, phoneNumber,address} 
                });
        }
    }
    static async signin(req, res) {
        if (isEmpty(req.body)) {
            return res.status(400).send({ status: 400, message: 'Empty fields' });
        }
        try {
           const { email, password } = req.body;
           const aUser = await executeQuery(queries[0].isExist, [email]);
           const validPass = bcrypt.compareSync(password,aUser[0].password); 
           if (aUser[0].email) {
               if(validPass){
                   const token = jwt.sign({ email: aUser[0].email}, process.env.secretkey);
                    const results = await executeQuery(queries[0].login, [email]);
                    res.status(200).send({
                        status:200, 
                        token,
                        data: {
                            email:results[0].email,
                            firstname:results[0].first_name,
                            lastname:results[0].last_name,
                            phoneNumber:results[0].phonenumber,
                            address:results[0].address,
                        }
                    });
                }else return res.status(401).send({status:401,error:'Wrong Password'});
           }
           else res.status(401).send({status:401, error:'Invalid Email'});
        }
        catch (e) {
            res.status(401).send({status:401, error:'Invalid data'});
        }

    }
}

export default User;

