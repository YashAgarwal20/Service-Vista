const express=require("express");
const router=express.Router();
const authcontroller=require("../controller/auth-controller.js");
const validate=require("../middlewares/validate-middleware.js");
const signupSchema=require("../validators/auth-validator.js");

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(validate(signupSchema),authcontroller.login);

module.exports=router;