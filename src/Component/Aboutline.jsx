import React from 'react'
import '../Style/Aboutline.css'
import * as Icons from 'react-bootstrap-icons' 
import { useNavigate } from 'react-router-dom';

const Aboutline = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

    const navigate=useNavigate();
    const home=()=>{
      navigate('/');
    }


  return (
   <>
  <div className="newsletter">
   <div className="newstext">
    <h4>Sign Up For Newsletters</h4>
    <p>Get E-Mail updates about our latest shop and <span>specail offers.</span></p>
   </div>
   <div className="form">
    <input type="text" placeholder="Your email address"/>
    <button className="normal">Sign Up</button>
   </div>
  </div>

  <div className="mean-end">
  <div className="finish-line">
    <div className="col">
    <div className='Company-icon'  onClick={home}><img src={require('./img/rb-logo.png')} alt="rb-logo" height={110} className=""/> </div>
    <h3>Contact</h3>
    <p><strong>Address:</strong> Opp ST Agrasen College, Near Badi Mandir, Kalwa, Thane east 400605.</p>
    <p><strong>Phone:</strong> +91 1234567890 / +91 0987654321</p>
    <p><strong>Hours:</strong> 24/7 Hours Service, Monday to Saturday</p>
    <div className="follow">
      <h3>Follow Us</h3>
      <div className="follow-icons">
      <div className='fb'><a href="#" target="_blank"><Icons.Facebook size={20} /></a></div>
      <div className='ig'><a href="https://www.instagram.com/suryadev.singh_official?igsh=cmpuaG5yczRmcHZn" target="_blank"><Icons.Instagram size={20} /></a></div>
      <div className='tw'><a href="#" target="_blank"><Icons.Twitter size={20} /></a></div>
      <div className='yt'><a href="#" target="_blank"><Icons.Youtube size={20} /></a></div>
      </div>
    </div>
    </div>
    <div className="col">
      <h3>About</h3>
      <a href='#'>About us</a>
      <a href='#'>Delivery Information</a>
      <a href='#'>Privicy Policy </a>
      <a href='#'>Terms & Conditions</a>
      <a href='contact'>Contact Us</a>
    </div>
    <div className="col">
      <h3>Account</h3>
      <a href='#'>Sign In</a>
      <a href='#'>View Cart</a>
      <a href='#'>My Wishlist</a>
      <a href='#'>Track My Order</a>
      <a href='#'>Help</a>
    </div>
    <div className="col install">
      <h3>Install App</h3>
      <p>From Store or Google Play</p>
      <div className="col-3-row">
      <img src={images['appstore.jpeg']}  alt='app' />
      <img src={images['playstore.png']} alt='play' />
      <p>Secured Payment Gateways</p>
      <img src={images['online pay icon.jpeg']}  alt='pay' />
      </div>
    </div>
    <div className="copy-right">
      <p>© 2023, Content Owned, updated and maintained by Intellectual Property India, All Rights Reserved.</p>
    </div>
  </div>
  </div>
   </>
  )
}

export default Aboutline
