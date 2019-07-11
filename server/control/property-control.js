import property from "../models/property-model";
import user from "../models/user";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


class Property {
    static create(req, res) {
        const { owner, price, city, type, image, state, address } = req.body;
        const isUserExist = user.find(p => p.email == owner);
        if (!isUserExist) {
            return res.status(404).send({ status: 404, message: "User not exist" });
        }
        const newProperty = {
            id: property.length + 1,
            owner,
            status: "available",
            price,
            state,
            city,
            address,
            type,
            image,
            created_on: new Date()
        }

        if (newProperty)
            property.push(newProperty);
        res.status(201).send({
            status: "success",
            data: newProperty
        });
    }

    static updateProperty(req, res) {
        const { price, state, status, address, type, city } = req.body;
        let prices;
        let states;
        let statuss;
        let addresses;
        let types;
        let citys;
        const isPropertyExist = property.filter(p => p.id == req.params.id);
        const isOwner = property.find(k => k.owner == req.body.owner);
        if (isPropertyExist) {
            if (isOwner) {
                const result = property.map(p => {
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
                        status:'available',
                        prices,
                        states,
                        citys,
                        addresses,
                        types
                    }
                });
            }
        }
    }
    static allProperties(req, res) {
        let result = property
        if (req.query.type) result = property.filter(p => p.type == req.query.type);

        if (result) {
            return res.status(200).send({ status: "success", data: result });
        }else {res.status(404).send({status:"error", message:"No property found on that type"})};
        if(req.query === {}) return res.status(200).send({status:"success",data:property});
    }
    static specificProperty(req,res){
        const isProperty = property.find(p=>p.id == req.params.id);
        if(isProperty){
            res.status(200).send({status:200,data:isProperty});
        }else res.status(404).send({status:404, message:"property not found"});
    }
    static markSold(req, res){
        const isProperty = property.find(p=>p.id == req.params.id);
        if(isProperty){
            if(isProperty.status === 'available') isProperty.status='sold';
            else isProperty='available';

            res.status(200).send({status:200,data:isProperty});
        }
        else res.status(404).send({status:404, message:"Property not found"});
    }
    static delete(req,res){
        const isProperty = property.find(p=>p.id == req.params.id);
        if(isProperty){
            res.status(200).send({
                status: "success",
                message: 'deleted successfully',
                data: isProperty
            });
            const indexes = property.indexOf(isProperty);
            property.splice(indexes,1);
        }else{
            res.status(404).send({status:404, message:"Property not found"});
        }
    }
}
export default Property;