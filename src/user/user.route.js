import express from "express";
import userController from "./user.controller.js";
//import userController from"./user.controller.js";
const router = express.Router();

 
 router.post("/signUp", userController.signup); 
 router.get("/login",userController.login);
 router.patch("/updateinfo",userController.changeInfo);
 router.patch("/changepass",userController.Changepass)


export default router;  



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