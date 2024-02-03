import React from 'react';
import Bio from './Bio';
import FeaturedProject from './FeaturedProject';


function HomePage(){
  var getStyle = () => {
    return {
      backgroundColor: "grey",
    };
  };

  return (<div style = {getStyle()}>
      <Bio></Bio>
      <FeaturedProject></FeaturedProject>
  </div>
  )


}

export default HomePage;


//days at location
//produce/season