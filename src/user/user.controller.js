import userService from "./user.service.js";
const  signup = async (req,res)=>{
    try{
      const {email , firstname,lastname,password} = req.body;
      await userService.createuser(email,firstname,lastname,password);
        res.status(200).json({message:"user added successfully"});
    }
    catch(error){
      res.status(400).json({message: error.message});
    }
}
const login = async (req,res)=>
{
  try{
    const {email , password }= req.body
    await userService.checskuser(email,password);
    res.status(200).json({message:"user found login is succesfully"});
  }
  catch(error)
  {
      res.status(404).json({message:"user not found"});
  }
}

const changeInfo = async(req,res)=>{
  try{
  const {email,firstname,lastname,password} = req.body;
  await userService.changeInfo(email,firstname,lastname,password);
  res.status(200).json({message:"user changed successfully"});
 
}catch(error){
  res.status(400).json({message: error.message});
  }
}
const Changepass = async(req,res)=>{
  try{
      const {email,password} = req.body;
      await userService.Changepass(email,password);
      res.status(200).json({message:"passed changed succesfully"});
  } 
  catch(error){
        res.status(400).json({message: error.message});
  }
}

export default{signup,login,changeInfo , Changepass}
