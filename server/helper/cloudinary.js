import cloudinary from "cloudinary";
import dotenv from "dotenv";
import url from "url";

const cloudinar = (req, res, next) => { 
    dotenv.config();
    const cloudinary_url = url.parse("cloudinary://623643851873444:OY2A4wwoW1if6JTm7clxik2v7TY@prolite");
    cloudinary.config({
        cloud_name: cloudinary_url.host,
        api_key: cloudinary_url.auth.split(':')[0],
        api_secret: cloudinary_url.auth.split(':')[1],
    });
    cloudinary.v2.uploader.upload(req.body.image, (error, result) => {
        if (result) {
            req.body.image = result.secure_url;
        }
        return next();
    });
};

export default cloudinar;