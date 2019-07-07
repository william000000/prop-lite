import express from "express"
import property from "../control/property-control";
import cloudinsry from '../config/cloudinaryConfig';
import validateProperty from '../validators/propertyValidation'
const router = express.Router();

const { createProperty } = validateProperty;

router.post('/property', cloudinsry,createProperty, property.create);
router.patch('/property/:id', createProperty,property.updateProperty);
router.patch('/property/:id/sold', property.markSold);
router.get('/property', property.allProperties)
router.get('/property/:id', property.specificProperty);
router.delete('/property/:id', property.delete);
export default router;

