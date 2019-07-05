import express from "express";
import authRouter from "./routes/user-route";
// import propRouter from "./routes/property.route"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use("/api/v1/auth/", authRouter);
// app.use("/api/v1/", propRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
export default app;