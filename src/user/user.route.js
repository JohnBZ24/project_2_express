import express from "express";
import userController from "./user.controller.js";
//import userController from"./user.controller.js";
const router = express.Router();

router.post("/signUp", userController.signup);
//router.get("/login", userController.login);
//router.patch("/updateinfo", userController.changeInfo);
//router.patch("/changepass", userController.Changepass);
router.get("/getOneById", userController.getOne);
router.get("/findAll", userController.GetAll);
router.delete("/delete", userController.deleteUser);
router.delete("/deletemany/firstName", userController.deleteUsers);
router.get("/login", userController.Login);
export default router;
//password can be  post or patch

/*router.post("/signup",(req,res)=>{
  console.log("baroud ");
})


 router.use("*",(req,res,next)=>{
  console.log("my request is :" , req);
  console.log("request : ", req.method); 
  console.log("baseUrl", req.baseUrl); 
  next();
 }) 
 */
