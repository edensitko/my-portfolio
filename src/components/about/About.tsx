import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import meImage from '../sources/me.png'; // Import the image
import './About.css';
import reactImage from '../sources/react.png'; // Import the image
import htmlImage from '../sources/html.png'; // Import the image
import cssImage from '../sources/css.png'; // Import the image
import jsImage from '../sources/js.png'; // Import the image
import mongoImage from '../sources/mongo.png'; // Import the image
import expressImage from '../sources/express.png'; // Import the image
import nodeImage from '../sources/node.png'; // Import the image
import mysqlImage from '../sources/mysql.png'; // Import the image
import gitImage from '../sources/github.png'; // Import the image
import angularImage from '../sources/angular.png'; // Import the image
import jqueryImage from '../sources/jquery.png'; // Import the image
import tsImage from '../sources/ts.png'; // Import the image
import btsImage from '../sources/bts.png'; // Import the image
import React from 'react';
import tailwindImage from '../sources/tailwind.png'; // Import the image
import firebaseImage from '../sources/firebase.png'; // Import the image



const About: React.FC = () => {
  const getRandomDelay = () => {
    return Math.random() * 4 + 's';
  };

  return ( 
    
    <div className='about'>

   
      <img src={meImage} alt="eden" className="circular-image" />

      <div>
        <h1>About</h1>
        <br/>
        <div className="summ">
    <br/>
          I'm a Full Stack Developer from Tel-Aviv.
           I'm especially passionate about designing 
           interfaces, sports and fashion apps, and 
           productivity tools. I love to geek out about 
           optimizing and streamlining code. I'm always 
           excited to learn new tricks and connect with other 
           developers! Feel free to reach out.
        </div>
      </div>

      <hr />
      <div>
    
        <h3>Key technologies I use:</h3>
        <br />
        <br />

       <h5 className="card-title">Frontend</h5>
       <br/>
        <div className="card-body ">
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }} > <br/> <br/>
          <img src={htmlImage} alt="Your Image" className="image html "  />
HTML
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}><br/> <br/>
          <img src={cssImage} alt="Your Image" className="image css" /> 
          CSS 
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}><br/> <br/>
          <img src={jsImage} alt="Your Image" className="image js" />
JavaScript 
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={jqueryImage} alt="Your Image" className="image" />
jQuery
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={reactImage} alt="Your Image" className="image" />
          React
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={angularImage} alt="Your Image" className="image" />
Angular
          </div>
        </div>

        <br /><br />

        <h5 className="card-title">Backend</h5>


        <div className="card-body">
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}><br/> <br/>
          <img src={mongoImage} alt="Your Image" className="image" />
MongoDB 
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={expressImage} alt="Your Image" className="image express" />
Express
          </div>

          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={mysqlImage} alt="Your Image" className="image" />
MySQL
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={firebaseImage} alt="Your Image" className="image" />
Firebase
          </div>
          
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={nodeImage} alt="Your Image" className="image" />
Node.JS
          </div>
         
        </div>
        <br /><br />


       <h5 className="card-title">Other</h5>
       <br/>
      

        <div className="card-body">
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={btsImage} alt="Your Image" className="image bts" />
Bootstrap
          </div>
         
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          
          <img src={tsImage} alt="Your Image" className="image" />
TypeScript
          </div>
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={tailwindImage} alt="Your Image" className="image tailwind" />
tailwind          </div>
         
          <div className="card floating"  style={{ animationDelay: getRandomDelay() }}> <br/> <br/>
          <img src={gitImage} alt="Your Image" className="image" />
GitHub
          </div>
         
        </div>
      </div>
      <br />
      <br />
         
    </div>
  );
}

export default About;
