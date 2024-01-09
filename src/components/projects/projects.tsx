import React, { useState } from 'react';
import './projects.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SvgIcon from '@mui/icons-material/ArrowDownward';
import vac from '../sources/vac.png'; 
import cr from '../sources/cr.png'; 
import ft from '../sources/ft.png'; 
import chs from '../sources/chs.png'; 
import { Link } from 'react-router-dom';

const projectData = [
  {
    id:"1",
    title: 'football memory game ',
    description: 'Memory React Game is a React-based web project where players flip cards to find matching pairs, enhancing memory skills. It offers diverse grid sizes, animations, and responsive design for an engaging experience that challenges users memory abilities',
    image: ft,
    githubLink: 'https://github.com/edensitko/footballmemory',
    liveLink: 'https://edensitko.github.io/footballmemory/',
    techs:['react', 'typescript','tailwind'],
  },
  {
    id:"2",
    title: 'selfShef  ',
    description: 'cooking recipes app is a React-based web project where user can view recipes , add , search and delete recipes ',
    image: chs,
    githubLink: 'https://github.com/edensitko/selfshef',
    liveLink: 'https://edensitko.github.io/selfshef/',
    techs:['react', 'firebase','tailwind','typeScript'],
  },
  {
    id:"3",
    title: 'Vacations site',
    description: "A web app that allows users to search for vacation and add them to favorites. The app was built with Angular, Node.js, and SQL. Users can filter for followed vacations and dates , the admin can add , delete , update the vacation and see reports of followed items and download csv of the data ",
    image: vac,
    githubLink: 'https://github.com/edensitko/edenSite',
    liveLink: 'https://edensitko.github.io/edenSite/',
    techs:['angular','node.js','express','mySql','typeScript'],
  },
  {
    id:"4",
    title: 'crypto api',
    description: ' Crypto Fetch API is a jQuery and Ajax-powered project that retrieves real-time cryptocurrency data. It dynamically updates prices, charts, and information, delivering an interactive and up-to-date crypto tracking experience.    ',
    image: cr,
    githubLink: 'https://github.com/edensitko/crypto-project',
    liveLink: 'https://edensitko.github.io/crypto-project/',
    techs:['jQuery','bootsrap'],
  },
];

const Projects: React.FC = () => {
  const [expandedStates, setExpandedStates] = useState(
    projectData.map(() => false)
  );

  const toggleExpanding = (index: number) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <div className="container Myprojects">
      <h1>my projects</h1>
      {projectData.map((project, index) => (
        <div className="project-card" key={project.id}>
          <div className="divtitle">
            <div className="card-title title">{project.title}</div>
            <hr />
          </div>
          <div className="card-image">
            <img src={project.image}  className="img" />
            <div className='svg'>try out<SvgIcon component={ArrowDownwardIcon}></SvgIcon></div>
            <div className="container proj">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        <button className="project-button live">Live</button>
      </a>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <button className="project-button code">Code</button>
      </a>
            </div>
          </div>
          <div className=" project-button expanding-container">
            <button onClick={() => toggleExpanding(index)} className='toggle'>
              More...
            </button>
            <div className={`expanding-content ${expandedStates[index] ? 'expanded' : ''}`}>
              <h4>used techs :</h4> 
              <div className="text-black acontainer">
              
                {project.techs?.map((tech) => (
                  <div className="tech" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { projectData }; // Export the projectData array

export default Projects;
