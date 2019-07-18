import express from "express";
import authRouter from "./routes/user-route";
import propRouter from "./routes/property-route"
import flagRouter from "./routes/flag-route";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/apiDocumentation", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/", propRouter);
app.use("/api/v1/", flagRouter);
app.use("*", (req,res)=>{
    res.status(404).send({status:404, error:'No page found on that route'});
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

});
export default app;