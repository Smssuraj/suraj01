import React from 'react'
import '../Style/Welcome.css'
import * as Icons from 'react-bootstrap-icons' 
import Popular from './Popular'
import Productinfo from './Productinfo'
import Devloperinfo from './Devloperinfo'
import {useEffect} from 'react';


const Welcome = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        
        <>

<div className="body-welcome">
            <div className="welcome">
            <br />
            <br />
                <h1 className="welcome-h1">WELCOME TO RB COLLECTION STORE</h1>
                <br /> <hr /> <br />
                 <p className="welcome-p">RB collection supply the best product to our customer
                  because you deserve it don't think just try now..</p>
                  <br /><br />
                    <div className="box">
                        <input type="checkbox" id="check" />
                        <div className="search-box">
                            <input type="text" placeholder="Type here..." />
                            <label for="check" className="icon">
                                <Icons.Search className="fas" />
                            </label>
                        </div>
                    </div>
                    <div className="click-here" id="section1">
                    <a href="#section2"> <Icons.ArrowDownCircleFill size={50} /></a>
                    </div>
            </div>
</div>

            <Productinfo />
            <Popular />
            <Devloperinfo /> 

        </>
    )
}

export default Welcome
