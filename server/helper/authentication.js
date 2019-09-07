import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

class Tokens{
    static async authenticate(req, res, next) {
        const token = req.header('x-token');
        if (!token) return res.status(401).send({ status: 401, error: 'Access Denied. We need a token' });
        try {
            const payload = jwt.verify(token, process.env.secretkey);
            req.payload = payload; 
            next();
        } catch (ex) {
            return res.status(400).send({ status: 400, error: 'Invalid token' });
        }
    }
};
export default Tokens;