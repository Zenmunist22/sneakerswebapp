import React from 'react';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Register =()=>  {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
;

//Handle Inputs
const handleInput = (event) => {
  let name=event.target.name;
  let value = event.target.value;

  setUser({...user, [name]: value});
}

//Handle Submits
const handleSubmit = async(event)=>{
  event.preventDefault();
  //Object Destructuring
  const{ email,password} = user;
  try{
    const res = await fetch ('http://localhost:5000/register/add',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email, password
      })
    })

    if(res.status === 400 || !res){
      window.alert("Already Used Details")
    }else{
      //Need to restart server for proxy to function
      window.alert("Registration Successful!");
      navigate('/login')
    }
      
  }catch(error){
    console.log(error);
  }
}
    return(
        <div>
         <div className="container shadow my-5">
                <div className="row">
                   <div className="col-md-5 d-flex flex-column align-items-center form">
                    <h1 className="display-4 fw-bolder">
                        Welcome!
                    </h1>
                    <p className="lead text-center">Enter your details to register</p>
                    <h5 className="mb-4">OR</h5>
                    <NavLink to="/login" className="btn btn-outline-light-rounded-pill pb-2 w-50">Login</NavLink>
                   </div>
                   <div className="col-md-6">
                    <form onSubmit={handleSubmit} method = "POST">
  <div class="mb-3">
    <label for="name" class="form-label">Email address</label>
    <input type="email" class="form-control" id="name" name = "email" value={user.email} onChange = {handleInput}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name = "password" value={user.password} onChange = {handleInput}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
                   </div>
                </div>
            </div>   
        </div>
    )
}

export default Register;