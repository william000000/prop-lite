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

app.use("*", (req,res)=>{
    res.status(404).send({status:404, error:'No page found on that route'});
    });
app.use("/", (req,res)=>{
    res.status(200).send('Welcome to PropertyProLite');
    });

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
 console.log("connected");
});
export default app;