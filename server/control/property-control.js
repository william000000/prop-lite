import property from "../models/property-model";
import user from "../models/user";
import jwt from "jsonwebtoken";
import queries from '../database/MyQueries';
import executeQuery from '../database/execute';
import tokens from '../helper/authentication';

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

    static updateProperty(req, res) {
        const { price, state, status, address, type, city } = req.body;
        let prices;
        let states;
        let statuss;
        let addresses;
        let types;
        let citys;

        try {
            const token = jwt.verify(req.headers.token, process.env.secretKey);
            const isOwner = property.find(k => k.owner == token.email);
            const isPropertyExist = property.find(p => p.id == req.params.id);
            if (!isPropertyExist) {
                return res.status(404).send({ status: 404, error: "unknown property" });
            }

            if (isOwner.id == req.params.id) {
                property.map(p => {
                    p.price = price
                    p.state = state,
                        p.city = city,
                        p.address = address,
                        p.type = type

                    prices = p.price,
                        states = p.state,
                        citys = p.city,
                        addresses = p.address,
                        types = p.type

                    return p;
                });
                res.status(200).send({
                    status: "success",
                    data: {
                        status: 'available',
                        prices,
                        states,
                        citys,
                        addresses,
                        types
                    }
                });
            }
            else {
                return res.status(403).send({ status: 403, error: "your not the owner of that property" });
            }

        } catch (e) {
            return res.status(400).send({ error: "invalid token" });
        }

    }
    static allProperties(req, res) {
        let result = property
        if (req.query.type) result = property.filter(p => p.type == req.query.type);

        if (result.length>0) {
            return res.status(200).send({ status: "success", data: result });
        } else { res.status(404).send({ status: "error", message: "No property found on that type" }) };
        if (req.query === {}) return res.status(200).send({ status: "success", data: property });
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