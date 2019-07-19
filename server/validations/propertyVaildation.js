const address = /^\S[a-zA-Z]{3,}$/;
const state = /^\S[a-zA-Z]{3,}$/;
const city = /^\S[a-zA-Z]{3,}$/;
const price = /^\S(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;

class validateProperty {
    static createProperty(req, res, next) {
        try {
            if (req.body.type !== "apartment" && req.body.type !== "house" && req.body.type !== "office" && req.body.type !== "land")
                throw new Error("type must be either house, office, land or apartment");
            if (!state.test(req.body.state)) throw new Error("insert valid state");
            if (!city.test(req.body.city)) throw new Error("invalid city");
            if (!address.test(req.body.address)) throw new Error("invalid address");
            if (!price.test(req.body.price)) throw new Error("Invalid price inputted");
            if (req.body.price<0) throw new Error("Invalid price inputted");
             next();
        } catch (err) {
            res.status(400).send({ status: 400, error: err.message })
        }
    }
}
export default validateProperty;