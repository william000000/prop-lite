import express from "express";
import flags from "../control/flag-control";

const router = express.Router();

router.post('/report/:id', flags.reports);

export default router;