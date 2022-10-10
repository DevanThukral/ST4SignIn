import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Students from "./Students";
import "./Form.css";
import stud from "./student.png";


 export default function Form() {
  const [firstname, setfirstname] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let fn = firstname, n = name, em = email,m=mobile;
    Students.push({ fn,n,em,m });
    // console.log(Students);
    history('/create');


  }
  return (
//     <div class="wrapper">
//     <form class="form">
   
//       <div class="pageTitle title">Student Registration Form </div>
      
//       <input type="text" class="name formEntry"  name="name1" placeholder=" First Name" onChange={(e) => setfirstname(e.target.value)} required/>
//       <input type="text" class="name formEntry"   name="name2" placeholder="Last Name" onChange={(e) => setname(e.target.value)} required />
//       <input type="text" class="email formEntry" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required/>
//       <input type="number" maxLength={10} name="mobile" class="name formEntry" placeholder="Mobile" onChange={(e) => setmobile(e.target.value)} required/>  
//       <Link to='/added' style={{textDecoration:"none"}} >
//           <input className='btn submit formEntry' type="submit" onClick={handleSubmit}></input>
//         </Link>
      
//     </form>
    
//   </div>
//   )
// }



<div class="card">
<div class="card-header" >   <h1>Welcome</h1></div>

    <div class="form">
  
   
    <div className='card'>
    <div class="input-container ic1">
    <label for="firstname" className='l1'>First Name:</label><br/>
      <input id="firstname" class="input" type="text" placeholder="" onChange={(e) => setfirstname(e.target.value)} required/>
 
      
    </div>
    <div class="input-container ic2">
    <label for="lastname" className='l1'>Last Name:</label><br/>
      <input id="lastname" class="input" type="text" placeholder=" " onChange={(e) => setname(e.target.value)} required/>
 
     
    </div><br/>
    <div class="input-container ic2">
    <label for="email" className='l1'>Email:</label><br/>
      <input id="email" class="input" type="text" placeholder=" " onChange={(e) => setemail(e.target.value)} required/>
      <br/>
    </div>
     <div class="input-container ic2">
     <label for="Phone Number" className='l1'>Phone Number:</label><br/>
      <input id="Phone Number" class="input" type="text" placeholder=" " onChange={(e) => setmobile(e.target.value)} required/>
 
      
    </div><br/>
    <Link to='/added' style={{textDecoration:"none"}} >
          <input className='btn submit formEntry' type="submit" class="submit" onClick={handleSubmit}></input>
        </Link>
  </div>
  </div>
  </div>
  )}
