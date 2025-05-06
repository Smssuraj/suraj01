import React from 'react'
import '../Style/Navbar.css'
import * as Icons from 'react-bootstrap-icons' 
import { useNavigate } from 'react-router-dom';
import { toHaveAccessibleErrorMessage } from '@testing-library/jest-dom/matchers';



const Navbar = () => {

    // function importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    //   }
      
    //   const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
      
     // coming soon page 
         const navigate=useNavigate();
        const home=()=>{
          navigate('/');
        }

        const navigate1=useNavigate();
        const abc=()=>{
          navigate1('/login');
        }

        

  return (
    <>

        <div className='navbar-main'>
            <div className='Company-icon' onClick={home }> 
              <img src={require('./img/rb-logo.png')} alt="rb-logo" height={110} className="rbcollection"/> 
            </div>
        
            
            <div className='nav-icon'>
                <div className="person"><Icons.PersonFill size={28} onClick={abc} /></div>
                <div className="heart-fill"><Icons.HeartFill size={26} /></div>
                <div className="cart-pg"><Icons.Cart2 size={28} /></div>
            </div>
        </div>

    </>
  )
}

export default Navbar
