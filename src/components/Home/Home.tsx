import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SvgIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typewriter from "typewriter-effect";
const Home: React.FC = () => {
  return (

    <div className="Home"> <div className="headerA">

    </div>
    
<div className="space ">
  
   
      <div className="row ">    
        <div className="col-md-8 offset-md-1 text-center"> 
        <div className="container headers">
            <div className="first-head">
              <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
              <div className="name">  Hi, my name is</div>
          </div> 
          <div className="slide-right">
          <div className="wrapper atop">  
            <div className="top">eden </div>
            <div className="bottom" aria-hidden="true">
              eden
            </div>      
            </div>
          </div> 
          <div className="mainwrapper">  
          <div className="wrapper ">  
            <div className="top"> sitkovetsky</div>
            <div className="bottom" aria-hidden="true">
                sitkovetsky
            </div>
            </div>
            <br/>
             <br/>
          </div>
          <div className="second-head">
           <Typewriter
      options={{
        strings: [
           "Full-Stack Developer",
          "Front-End Developer",
          "Back-End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
</div>
          </div>
          <div className="third-head">
          I’m a full-stack developer specializing in building 
          (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building
           responsive full-stack web applications.   
           <br/> <br/>
           <div className="divlinks">
           <a href="https://github.com/edensitko" className="slink"
             target="_blank"
              rel="noopener noreferrer" >
          <GitHubIcon />
        </a>
    <a href="https://www.linkedin.com/in/eden-sitkovetsky-974460238/" className="slink"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInIcon />
        </a>       
</div>
           <br/> <br/> <br/> <br/> 
  
             <Link className="button" to="Myprojects" smooth={true} duration={300}>
                view projects  <SvgIcon component={ArrowDownwardIcon}  />
              </Link>

            </div>  
          </div>  
           </div>
          </div>             
        
          </div>
  </div>
         


   
  );
};

export default Home;
