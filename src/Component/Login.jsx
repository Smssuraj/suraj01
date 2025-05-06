import React from 'react'
import '../Style/Login.css'
import * as Icons from 'react-bootstrap-icons'
import {useEffect} from 'react';


const Login = () => {
  
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  return (
    <>

<div>

<div className="bg"> 
<div className="login-body">
<form >
  <div class="form-field">
    <input type="email" placeholder="Email / Username" required/>
  </div>
  
  <div class="form-field">
    <input type="password" placeholder="Password" required/>                        
	 </div>
  
  <div class="form-field">
    <button class="btn" type="submit">Log in</button>
  </div>
  </form>
  </div>
  </div>
</div>

    </>
  )
}

export default Login
