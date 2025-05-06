import './App.css';
import Aboutline from './Component/Aboutline';
import Navbar from './Component/Navbar';
import Welcome from './Component/Welcome';
import { Route, Routes } from "react-router-dom"
import Gonda from './Component/Gonda';
import Fringish from './Component/Fringish';
import Trending from './Component/Trending';
import Jari from './Component/Jari';
import Login from './Component/Login';
import Contact from './Component/Contact';


function App() {
  return (
    <>    
       <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/jari" element={< Jari/>} />
          <Route path="/gonda" element={< Gonda/>} />
          <Route path="/fringish" element={< Fringish/>} />
          <Route path="/trending" element={< Trending/>} />
          <Route path="/login" element={< Login />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
      </div>
      <Aboutline /> 
         </>
  );
}

export default App;


