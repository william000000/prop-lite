
import express from "express"
import property from "../control/property-control";
import validateProperty from '../validations/propertyVaildation';
import flag from '../control/flag-control';
import validFlag from '../validations/flagValidations';
import cloudinary from '../helper/cloudinary';
import tokens from '../helper/authentication';
const router = express.Router();

const { createProperty } = validateProperty;
const { authenticate } = tokens;

router.post('/property', cloudinary, createProperty, authenticate, property.create);
router.post('/property/report/:id', validFlag.validateflags, flag.report);
router.patch('/property/:id', createProperty, authenticate, property.updateProperty);
router.patch('/property/:id/sold', authenticate, property.markSold);
router.get('/property', property.allProperties)
router.get('/property/:id', property.specificProperty);
router.delete('/property/:id', authenticate, property.delete);
export default router;