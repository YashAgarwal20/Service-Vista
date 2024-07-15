const express=require("express");
const router=express.Router();
const getAll=require("../controller/admin-controller");
const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware,adminMiddleware,getAll.getAllUsers);
router.route("/users/:id").get(authMiddleware,adminMiddleware,getAll.getUserById);
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,getAll.updateUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,getAll.deleteUserById);



router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,getAll.deleteContactById);
router.route("/contacts").get(authMiddleware,adminMiddleware,getAll.getAllContacts);


router.route("/services").get(authMiddleware,adminMiddleware,getAll.getAllServices);
router.route("/services/:id").get(authMiddleware,adminMiddleware,getAll.getServiceById);
router.route("/services/update/:id").patch(authMiddleware,adminMiddleware,getAll.updateServiceById);
router.route("/services/delete/:id").delete(authMiddleware,adminMiddleware,getAll.deleteServiceById);
module.exports=router;
