const express=require("express");
const router=express.Router();
const getAll=require("../controller/admin-controller");

router.route("/users").get(getAll.getAllUsers);
router.route("/contacts").get(getAll.getAllContacts);
module.exports=router;
