import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/records" element={<RecordList/>} />
       <Route exact path="/login" element={<Login/>}/>
       <Route exact path="/register" element={<Register/>}/>
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;