const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//Configure ENV file
require("dotenv").config({ path: "./config.env" });
require('./db/conn');

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

//Configure ENV File and Require Connection File
require("dotenv").config({ path: "./config.env" });
require('./db/conn');

//Require Model
const Users = require('./db/models/userSchema');

//This Method is Used to Get Data and Cookies from the FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

//Registration
app.post('/register', async(req, res)=>{
  try{
    //Get body or Data
    const email=req.body.email;
    const password=req.body.password;

    const createUser = new Users({
      email:email,
      password:password
    });
    //Save method is used to create/insert user
    //before saving/inserting, password will Hash
    //After Hash, it saves to DB
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered")

  }catch(error){
    res.status(400).send(error) 
  }
})

//Login User
app.post('/login', async(req, res)=>{
  try{
    const email = req.body.email;
    const password = req.body.password
    
    //Find if user exist
    const user = await Users.findOne({email:email});
    if(user){
      //Verify password
      const isMatch = await bcryptjs.compare(password, user.password);

        if(isMatch){
          //Generate Token defined in user schema
          const token = await user.generateToken();
          res.cookie("jwt", token,{
            //expires token in 24 hours
            expires: new Date(Date.now()+86400000),
            httpOnly:true
          })
          res.status(200).send("LoggedIn")
        } else{
          res.status(400).send("Invalid Credentials");
        } 
    }else{
          res.status(400).send("Invalid Credentials");
        }
  }catch(error){
    res.status(400).send(error);
  }
})

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});