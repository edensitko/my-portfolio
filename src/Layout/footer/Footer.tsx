import React from 'react';
import './Footer.css'; // You can add your footer styles here
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
  return (
    <div className="div">
    <footer className="footer">
    <div className="containerfooter">
      <h6> Feel free to connect on social media :) </h6>
    </div>
    <div className="divlinksf">
    <a href="https://www.facebook.com/Eden.sitkovetsky?mibextid=b06tZ0" className="flink"
          target="_blank"
          rel="noopener noreferrer">
          <FacebookIcon />
        </a>


    <a href="https://github.com/edensitko" className="flink"
          target="_blank"
          rel="noopener noreferrer" >
          <GitHubIcon />
        </a>
    <a
          href="https://www.linkedin.com/in/eden-sitkovetsky-974460238/" className="flink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        </div>
    </footer>
    <div className="down">
      <p>&copy; {new Date().getFullYear()}  All rights reserved to eden sitkovetsky. </p>
      </div>
      </div>
  );
};

export default Footer;
