import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import meImage from '../sources/me.png'; // Import the image
import './About.css';
import sassImage from '../sources/sass.png'; // Import the image
import reactImage from '../sources/react.png'; // Import the image
import htmlImage from '../sources/html.png'; // Import the image
import cssImage from '../sources/css.png'; // Import the image
import jsImage from '../sources/js.png'; // Import the image
import mongoImage from '../sources/mongo.png'; // Import the image
import expressImage from '../sources/express.png'; // Import the image
import nodeImage from '../sources/node.png'; // Import the image
import mysqlImage from '../sources/mysql.png'; // Import the image
import phpImage from '../sources/php.png'; // Import the image
import gitImage from '../sources/github.png'; // Import the image
import angularImage from '../sources/angular.png'; // Import the image
import jqueryImage from '../sources/jquery.png'; // Import the image
import tsImage from '../sources/ts.png'; // Import the image
import btsImage from '../sources/bts.png'; // Import the image





const About: React.FC = () => {
  return (
    <div className='about'>
      <img src={meImage} alt="Your Image" className="circular-image" />

      <div>
        <h1>about</h1>
        <br/>
        <div className="summ">

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

        <div className="card-body">
          <div className="card">HTML <br/> <br/>
          <img src={htmlImage} alt="Your Image" className="image html" />

          </div>
          <div className="card">CSS <br/> <br/>
          <img src={cssImage} alt="Your Image" className="image css" />

          </div>
          <div className="card">JavaScript <br/> <br/>
          <img src={jsImage} alt="Your Image" className="image js" />

          </div>
          <div className="card">jQuery <br/> <br/>
          <img src={jqueryImage} alt="Your Image" className="image" />

          </div>
          <div className="card">React <br/> <br/>
          <img src={reactImage} alt="Your Image" className="image" />

          </div>
          <div className="card">Angular <br/> <br/>
          <img src={angularImage} alt="Your Image" className="image" />

          </div>
        </div>

        <br />

        <h5 className="card-title">Backend</h5>

        <div className="card-body">
          <div className="card">MongoDB <br/> <br/>
          <img src={mongoImage} alt="Your Image" className="image" />

          </div>
          <div className="card">Express <br/> <br/>
          <img src={expressImage} alt="Your Image" className="image express" />

          </div>
          <div className="card">PHP <br/> <br/>
          <img src={phpImage} alt="Your Image" className="image php" />

          </div>
          <div className="card">MySQL <br/> <br/>
          <img src={mysqlImage} alt="Your Image" className="image" />

          </div>
          <div className="card">Node.JS <br/> <br/>
          <img src={nodeImage} alt="Your Image" className="image" />

          </div>
         
        </div>
        <br />


       <h5 className="card-title">Other</h5>

        <div className="card-body">
          <div className="card">Bootstrap <br/> <br/>
          <img src={btsImage} alt="Your Image" className="image bts" />

          </div>
          <div className="card">Sass<br/> <br/>
          <img src={sassImage} alt="Your Image" className="image sass" />

          </div>
          <div className="card">TypeScript <br/> <br/>
          
          <img src={tsImage} alt="Your Image" className="image" />

          </div>
          <div className="card">GitHub <br/> <br/>
          <img src={gitImage} alt="Your Image" className="image" />

          </div>
         
        </div>
      </div>
      <br />
      <br />
         
    </div>
  );
}

export default About;
