const reason = /^\S[A-Za-z]{1,}$/;
const desc = /^\S[A-Za-z]{1,}$/;


class FlagValidation {
    static validateflags(req, res, next) {
        try {
            if (!reason.test(req.body.reason)) throw new Error("enter a real reason");
            if (!desc.test(req.body.description)) throw new Error("enter valid data");
        } catch (error) {
            res.status(400).send({
                status: "error",
                message: error.message
            })
        }

    }
}
export default FlagValidation;