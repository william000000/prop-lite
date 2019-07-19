import property from "../models/property-model";
import flag from "../models/flag";
import queries from '../database/MyQueries';
import executeQuery from '../database/execute';

class Flags {
    static async reports(req, res) {
        const email = req.payload.email;
        const { reason, description } = req.body;
        const properties_id = req.params.id;
        const isPropertyExist = await executeQuery(queries[1].isPropertyExist, [properties_id]);
        if (!isPropertyExist.length>0) {
            return res.status(404).send({ status: 404, message: "Property not found" });
        }
        const newFlag = await executeQuery(queries[2].createFlags, [properties_id, email, reason, description]);

        if (newFlag)
            res.status(201).send({
                status: 201,
                data: newFlag
            });
    }
}
export default Flags;