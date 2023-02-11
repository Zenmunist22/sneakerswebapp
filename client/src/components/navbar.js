import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (

   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
        <img style={{"width" : 10 + '%'}} src="logo.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav">
            <li className="nav-item">
             <NavLink className="nav-link" to="/records">
               Meet the Team
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Add a New Member 
             </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}