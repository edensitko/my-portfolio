import React from 'react';
import { Container, Grid } from '@mui/material';
import Footer from '../footer/Footer';
import './Layout.css';
import Home from '../../components/Home/Home';
import Projects from '../../components/projects/projects';
import Header from '../../components/header/header';
import About from '../../components/about/About';
const Layout: React.FC = () => {
  return (
    <div className="MainLayout"> 
            <div className="header">
              <React.Fragment>
               <Header /> 
               </React.Fragment>
                 </div>
              <Home /> 
               <About />
              <Projects/>
           <Footer />
    </div>
  );
};

export default Layout;
