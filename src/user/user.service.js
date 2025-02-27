let user =[];
const createuser = async (
  firstname,
  lastname,
  password,
  email
)=>{
  let object = {
    firstname:"",
    lastname:"",
    email:"",
    password:""
  }
  object.firstname = firstname;
  object.lastname= lastname;
  object.password = password;
  object.email = email;
  user.push(object);
}
const checskuser= async (email,password)=>{
  console.log(" iam in the check user");
    }
  for(const v in user)
    if(v.email == email && v.password ==password)
    {
      console.log("user found");
        }
    else{
      console.log("false ");
    }
  
  const changeInfo = async (email,firstname,lastname,password)=>{
  let  account = checskuser(email,password);//to get the user and check if hes found
  if(account)
  {
    account.firstname = firstname;
    account.lastname = lastname;
    account.email  = email;
  }

  }
  const Changepass = async (email,password)=>{
    let  account = checskuser(email,password);//to get the user and check if hes found
    if(account)
    {
      console.log("new password");
      account.password = password
    }

  }
export default {
  createuser,
  checskuser,
  changeInfo,
  Changepass

}