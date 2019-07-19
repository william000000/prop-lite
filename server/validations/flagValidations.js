const reason = /^\S[A-Za-z]{1,}$/;
const descr = /^\S[A-Za-z]{1,}$/;


class FlagValidation {
  static validateflags(req, res, next) {
    try {
      if (!reason.test(req.body.reason)) throw new Error("enter a real reason");
      if (!descr.test(req.body.description)) throw new Error("enter valid data");
      next();
    } catch (error) {
      res.status(400).send({
        status: 400,
        message: error.message
      })
    }

  }
}
export default FlagValidation;