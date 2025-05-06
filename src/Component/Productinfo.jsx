import React from 'react'
import '../Style/Productinfo.css'
import { useNavigate } from 'react-router-dom';



const Productinfo = () => {



    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


        // coming soon page 
  const navigate=useNavigate();
  const Jari=()=>{
    navigate('/jari');
  }

      // coming soon page 
      const navigate1=useNavigate();
      const Gonda=()=>{
        navigate1('/gonda');
      }

          // coming soon page 
  const navigate2=useNavigate();
  const Fringish=()=>{
    navigate2('/fringish');
  }

      // coming soon page 
      const navigate3=useNavigate();
      const Trending=()=>{
        navigate3('/trending');
      }

    
  return (
   <>
   <div className="headline" id="section2">
                <div className="jari">
            <div className="jari-icon" onClick={Jari}><img src={images['polyester-zari-thread-500x500.jpg']} alt="" height={50} /></div>
                <div className="jari-ja" onClick={Jari}><p>jari</p></div>
            </div>
            <div className="gonda">
            <div className="gonda-icon" onClick={Gonda}><img src={images['images (29).jpeg']} alt="" height={50} /></div>
                <div className="gonda-go" onClick={Gonda}><p>gonda</p></div>
            </div>
            <div className="fringish">
            <div className="fringish-icon" onClick={Fringish}><img src={images['images (61).jpeg']} alt="" height={50} /></div>
                <div className="fringish-fr" onClick={Fringish}><p>fringish</p></div>
            </div>
            <div className="trending"> 
            <div className="trending-icon" onClick={Trending}><img src={images['trending.png']} alt="" height={50} /></div>
                <div className="trend-pr" onClick={Trending}><p>trending</p></div>
                </div>
        </div>

   </>
  )
}

export default Productinfo
