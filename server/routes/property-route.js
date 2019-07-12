
import express from "express"
import property from "../control/property-control";
import cloudinary from '../config/cloudinaryConfig';
import validateProperty from '../validations/propertyVaildation';
import flag from '../control/flag-control';
import validFlag from '../validations/flagValidations'
const router = express.Router();

const { createProperty } = validateProperty;

router.post('/property', cloudinary,createProperty, property.create);
router.post('/property/report/:id', validFlag.validateflags,flag.report);
router.patch('/property/:id',createProperty,property.updateProperty);
router.patch('/property/:id/sold', property.markSold);
router.get('/property', property.allProperties)
router.get('/property/:id', property.specificProperty);
router.delete('/property/:id', property.delete);
export default router;


