import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
  return (//className pour le css
     <div className='portfolio'>
       
      <Navigation/>
      <ProjectList/>
    </div>
  );
};

export default Portfolio;