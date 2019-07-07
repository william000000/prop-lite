import property from "../models/property-model";
import flag from "../models/flag";
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


class Flags {
    static report(req, res) {
        const { reason, description } = req.body;
        const isPropertyExist = property.find(f => f.id == parseInt(req.params.id));
        if (!isPropertyExist) {
            return res.status(404).send({ status: 404, message: "Property not found" });
        }
        const newFlag = {
            id: flag.length + 1,
            property_id:req.params.id,
            reason,
            description,
            created_on: new Date()
        }

        if (newFlag)
            property.push(newFlag);
        res.status(201).send({
            status: "success",
            data: newFlag
        });
    }
}
export default Flags;