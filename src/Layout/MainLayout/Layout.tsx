import React from 'react';
import './Layout.css';
import Home from '../../components/Home/Home';
import Projects from '../../components/projects/projects';
import Header from '../../components/header/header';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';
const Layout: React.FC = () => {
  return (
    <div className="MainLayout"> 
           <Header/>
              <Home /> 
               <About />
              <Projects/>
           <Footer />
          
    </div>
  );
};

export default Layout;
