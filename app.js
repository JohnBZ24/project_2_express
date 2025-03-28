import express from "express";
import bodyParser from "body-parser";
import connect from "./src/config/database.js";
import userRoute from "./src/user/user.route.js";
const app = express(); //to use exoress throught the app
const { json, urlencoded } = bodyParser;

app.use("*", urlencoded({ extended: false })); //to generalize or parse the request to be understanble mnel code
connect();
app.use("*", json()); ////to generalize or parse the request to be understanble mnel code
app.use("/user", userRoute);

app.listen(3000, () => {
  //open a port location on  a server
  console.log("listening on port 3000");
});
