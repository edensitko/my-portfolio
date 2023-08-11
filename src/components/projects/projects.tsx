

import React from 'react';
import admin from '../sources/admin.jpg'; // Import the image
import user from '../sources/user.jpg'; // Import the image
import './projects.css'; // You can add your footer styles here
import mypor from '../sources/mypor.jpg'; // Import the image
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SvgIcon from '@mui/icons-material/ArrowDownward';
import vac from '../sources/vac.png'; 
import cr from '../sources/cr.png'; 
import res from '../sources/res.png'; 

const Projects: React.FC = () => {
  const projectData = [
    {
      title: 'Vacations site',
      description: "A web app that allows users to search for vacation and add them to favorites. The app was built with Angular, Node.js, and SQL. Users can filter for followed vacations and dates , the admin can add , delete , update the vacation and see reports of followed items and download csv of the data ",
      image: vac,
      githubLink: 'https://github.com/edensitko/edenSite',
      liveLink: 'https://edensitko.github.io/edenSite/',
    },
    {
      title: 'crypto api',
      description: ' RESTfull api app that get data of cryptocurrencies and filtering options. the user can add favorites cryptocurrencies and get all info of the coin that fetched from the api data , built with jQuery , bootsrap ',
      image: cr,
      githubLink: 'https://github.com/yourusername/yourproject2',
      liveLink: 'https://www.example.com/project2',
    },
   
    {
      title: 'my portfolio',
      description: 'my portfolio is an app built using react ,Responsive Showcasing interactive design through dynamic components and stylish aesthetics.  ',
      image: res,
      githubLink: 'https://github.com/edensitko/edenSite',
      liveLink: 'https://edensitko.github.io/edenSite/',
    },
  ];

  return (
    <div className="container Myprojects">

      <h1>my projects</h1>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-5" key={index}>
            <div className="cards project-card"> 
            <div className="divtitle">
           <div className="card-title title">{project.title}</div><hr/>
           <div className="card-text-container">

            <p className="card-text">{project.description}</p>
            </div><br/>

          <div className='svg'>try out<SvgIcon component={ArrowDownwardIcon}></SvgIcon>
          </div>
          </div>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >           

                <div className="card-overlay">
                  <div className="button-container">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="project-button code ">Code</button>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="project-button live ">Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
