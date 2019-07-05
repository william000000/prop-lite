import express from "express"
import property from "../control/property-control";

const router = express.Router();

router.post('/property', property.create);
router.patch('/property/:id', property.updateProperty);
router.patch('/property/:id/sold', property.markSold);
router.get('/property', property.allProperties);
router.get('/property/:id', property.specificProperty);
router.delete('/property/:id', property.delete);
export default router;

