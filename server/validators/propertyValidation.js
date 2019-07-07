const address = /^[a-zA-Z]{3,}$/;
const state = /^[a-zA-Z]{3,}$/;
const city = /^[a-zA-Z]{1,}$/;
const price = /^[+-]?([0-9]*[.])?[0-9]+/;

class validateProperty {
    static createProperty(req, res, next) {
        try {

            if (req.body.type !== "apartment" && req.body.type !== "house" && req.body.type !== "office" && req.body.type !== "land")
                throw new Error("type must be either house, office, land or apartment");
            if (!state.test(req.body.state)) throw new Error("insert valid state");
            if (!city.test(req.body.city)) throw new Error("invalid city");
            if (!address.test(req.body.address)) throw new Error("invalid address");
            if (!(req.body.price) && !price.test(req.body.price)) throw new Error("price needed");
            next();

        } catch (err) {
            res.status(400).send({ status: 400, error: err.message })
        }

    }
}
export default validateProperty;