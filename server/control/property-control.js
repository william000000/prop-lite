import property from "../models/property-model";
import user from "../models/user";
import jwt from "jsonwebtoken";
import queries from '../database/MyQueries';
import executeQuery from '../database/execute';
import tokens from '../helper/authentication';
import { pool } from 'pg';


class Property {
    static async create(req, res) {
        const { price, city, type, image, state, address } = req.body;
        const userEmail = req.payload.email 
            const newProperty = [
                userEmail,
                price,
                state,
                city,
                address,
                type,
                image,
            ]

            if (newProperty){
            const createProperty = await executeQuery(queries[1].create, newProperty);
            res.status(201).send({
                status: 201,
                data: createProperty
            });
        }

    }

    static async updateProperty(req, res) {
        const { price, state, address, type, city } = req.body;
        const id = req.params.id;
        const emailPayload = req.payload.email;
        try{
            const aProperty = await executeQuery(queries[1].getOne,[id]);       
        if(aProperty.length !== 0){
            if(aProperty[0].owner == emailPayload){
                const updateQuery = await executeQuery(queries[1].update, [price, state, city, address, type, id]);
                res.status(200).send({status:200, data:updateQuery});
            }else return res.status(403).send({status:403, error:'Not your property'})
        }else return res.status(404).send({status:404, error: 'Property not found'});
        }catch(err){
            res.status(400).send({status:400,error:err.message});
        }
    }
    static async allProperties(req, res) {
        try{
            const type = req.query.type;
            if(type){
                if (type !== 'apartment' && type !== 'house' && type !== 'office' && type !== 'land') throw new Error("We have no property of that type, Please try either apartment, house, land or office");
                const allTypes = await executeQuery(queries[1].getType, [req.query.type]);
                return res.status(200).send({status:200, data:allTypes});
        }
            const getallProperties = await executeQuery(queries[1].getAll);
            res.status(200).send({status:200, data:getallProperties});
        }catch(e){
            res.status(400).send({status:400, error:e.message})
        }
        
    }
    static specificProperty(req, res) {
        const isProperty = property.find(p => p.id == req.params.id);
        if (isProperty) {
            res.status(200).send({ status: 200, data: isProperty });
        } else res.status(404).send({ status: 404, message: "property not found" });
    }
    static markSold(req, res) {
        const isProperty = property.find(p => p.id == req.params.id);
        if (isProperty) {
            if (isProperty.status === 'available') isProperty.status = 'sold';
            else isProperty.status = 'available';

            res.status(200).send({ status: 200, data: isProperty });
        }
        else res.status(404).send({ status: 404, message: "Property not found" });
    }
    static async delete(req, res) {
        const id = parseInt(req.params.id);
        const emails = req.payload.email;
        try{
        const findProperty = await executeQuery(queries[1].getOne, [id]);        
        if(findProperty.length!==0){
            if(findProperty[0].owner == emails){
                res.status(200).send({status:200, message:'deleted'});
            }else return res.status(403).send({status:403, error:'Not your property'});
        }else return res.status(404).send({status:404,error:'Property not found'});
    }catch(e){
        res.status(400).send(e.message);
    }
    }
}
export default Property;