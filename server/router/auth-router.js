const express=require("express");
const router=express.Router();
const authcontroller=require("../controller/auth-controller.js");
const validate=require("../middlewares/validate-middleware.js");
const signupSchema=require("../validators/auth-validator.js");
const authMiddleware=require("../middlewares/auth-middleware.js");

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);

router.route("/user").get(authMiddleware,authcontroller.user);

module.exports=router;