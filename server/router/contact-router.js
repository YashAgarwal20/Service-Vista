const express=require("express");
const router=express.Router();
const validate=require("../middlewares/validate-middleware");
const contactForm=require("../controller/contact-controller");
const contactvalidateSchema = require("../validators/contact-validator");
router.route("/contact").post(validate(contactvalidateSchema),contactForm);

module.exports=router;