import React, { useState } from 'react';
import './header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-scroll';
import esImage from '../sources/es.png'; 
const Header: React.FC = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div className="header-container">
      
            <header className="header">
            <nav className="navbar">
      <div className="navbar-container ">
   <div className="containerHead">
          <div className="">
            <div className="">
           
            <Link className="link" to="Home">
               <img src={esImage} alt="Your Image" className="imagea es" />
               </Link>

            </div>
            
          </div>       
          

<input type="checkbox" />
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
       <ul className="menu-items">
     <Link className="link" to="Home" smooth={true} duration={300}>
                home
              </Link>       
     <Link className="link" to="Myprojects" smooth={true} duration={300}>
                projects
              </Link>
                           
      <Link className="link" to="about" smooth={true} duration={300}>
                about
              </Link>            
          </ul>
      </div>
       </div>
  </nav>
     
   
      </header> 
    </div>
  );
};

export default Header;
