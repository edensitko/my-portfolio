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
        <div className="containerHead">
          <div className="row align-items-center">
            <div className="col-md-6 col-9">
            <img src={esImage} alt="Your Image" className="image es" />

            </div>
            <div className="col-md-6 col-3 d-flex justify-content-center">
            </div>
          </div>       
             </div>

      <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
        <div className={`toggle-button ${navbarActive ? 'active' : ''}`} onClick={handleNavbarToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`navbar-links ${navbarActive ? 'active' : ''}`}>
          <ul>
            <li>
              <Link className="link" to="Home" smooth={true} duration={300}>
                home
              </Link>
            </li>
            <li>
              <Link className="link" to="Myprojects" smooth={true} duration={300}>
                projects
              </Link>
            </li>
            <li>
              <Link className="link" to="about" smooth={true} duration={300}>
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
  );
};

export default Header;
