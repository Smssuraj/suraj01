import React from 'react'
import '../Style/Devloperinfo.css'
import { useNavigate } from 'react-router-dom';


const Devloperinfo = () => {

  const navigate=useNavigate();
        const bsc=()=>{
          navigate('/contact');
        }



  return (
    <>

    <div className="devloper-info-detail">
      <div className="devloper-tit">ABOUT US</div>
       <div className="about-info-page"> 
       <div className="mypic">
       <img src={require('./img/suraj1.png')} alt="suraj"/> 
       </div>
       <div className="info-text">
        <h5>hey it's me ~</h5>
        <br></br>
        <h1>`SURYADEV SINGH</h1><hr></hr>
        <h3>A full-stack developer</h3>
        <br></br>
        <p>A slight clarification of the front end and the back end web developer I’m actually a BSC'it student cleverly as a successful web developer. 
          Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while reading Kant, 
          I’ve focused my energies on the web, which happily has proven itself to be a wonderful decision.</p><br></br>   
          <button type="button" className="button-box" onClick={bsc}>Contact US</button>
      </div>
       </div>
        </div>

    </>
  )
}

export default Devloperinfo
