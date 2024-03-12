const express=require("express");
const router=express.Router();
const getAll=require("../controller/admin-controller");
const Adminmiddleware=require("../middlewares/admin-middleware");
router.route("/users").get(Adminmiddleware,getAll.getAllUsers);
router.route("/contacts").get(Adminmiddleware,getAll.getAllContacts);
router.route("/services").get(Adminmiddleware,getAll.getAllServices);
module.exports=router;
