import React from 'react'
import '../Style/Contact.css'
import * as Icons from 'react-bootstrap-icons'
import {useEffect} from 'react';
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

const Contact = () => {
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>

useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (

   <>
   <div className="body-frame-of-contact">
   <section className="contact-section">
    <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className="contact-line">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p className="contact-text">
            We can help. Our team of experts is on hand to answer your Question's - Thank You for Contact Us with RB Collaction's
        </p>
        </div>

        <div className="contact-bodyframe">
            <div className="contact-info">
                <div>
                    <span> <Icons.PhoneFill className="fas" /> </span>
                    <span><h3>Phone No.</h3></span>
                    <span className="text">+91 1234567890 / +91 0987654321</span>
                </div>
                <div>
                    <span> <Icons.EnvelopeOpenFill className="fas" /> </span>
                    <span><h3>E-mail</h3></span>
                    <span className="text">rbcollection@company.com</span>
                </div>
                <div>
                    <span> <Icons.MapFill className="fas" /> </span>
                    <span><h3>Address</h3></span>
                    <span className="text">Opp ST Agrasen College, Near Badi Mandir, Kalwa, Thane east 400605</span>
                </div>
                <div>
                    <span> <Icons.ClockFill className="fas" /> </span>
                    <span><h3>Opening Time</h3></span>
                    <span className="text">24/7 Hours Service, Monday to Saturday</span>
                </div>
            </div>

        <div className="contact-form">
            <form>
                <div>
                    <input type="text" className="form-control" placeholder="First Name" />
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <textarea rows="5" placeholder="Message" className="form-control" />
                <input type="submit" className="send-btn" value="send message" />
            </form>

        <div>
        <img src={require('./img/contact-png.png')} alt="suraj" height={550} className="suraj-2"/> 
        </div>
        </div>
        </div>

        <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.243234489723!2d73.00379635000003!3d19.189889750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bed7f6bb7f3d%3A0xa4678772922c63a3!2sVaghoba%20Nagar%2C%20Kalwa%2C%20Thane%2C%20Maharashtra%20400605!5e0!3m2!1sen!2sin!4v1707935548519!5m2!1sen!2sin" 
        width="100%" height="450" 
        allowFullScreen
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"></iframe>
        </div>

            <div className="contect-footer">
                <h3>Follow Us</h3>
                <div className="social-links">
                <a href="#" target="_blank"><Icons.Facebook size={20} /></a>
                <a href="https://www.instagram.com/suryadev.singh_official?igsh=cmpuaG5yczRmcHZn" target="_blank"><Icons.Instagram size={20} /></a>
                <a href="#" target="_blank"><Icons.Twitter size={20} /></a>
                <a href="#" target="_blank"><Icons.Linkedin size={20} /></a>
                <a href="#" target="_blank"><Icons.Youtube size={20} /></a>
                </div>
            </div>


   </section>
   </div>
   </>
  )
}

export default Contact
