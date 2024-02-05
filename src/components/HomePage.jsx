import React from 'react';
import Bio from './Bio';
import FeaturedProject from './FeaturedProject';
import ProjectsList from './Projects';


function HomePage(){
  var getStyle = () => {
    return {
      backgroundColor: "white",
    };
  };

  return (<div style = {getStyle()}>
    <ProjectsList></ProjectsList>
  </div>
  )


}

export default HomePage;


//days at location
//produce/seaso