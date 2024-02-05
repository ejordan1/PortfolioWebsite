import React from 'react';
import Bio from './Bio';
import FeaturedProject from './FeaturedProject';
import ProjectsList from './Projects';


function AboutMe(){
  var getStyle = () => {
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };
  };

  var imageStyle = () => {
    return {
        width: "450px",
        height: "300px",
        objectFit: "contain"
    };
  };

  var textStyle = () => {
    return {
        margin: "30px",
        maxWidth: "400px" 
    };
  };

  return (
  <div style = {getStyle()}>
    <img style ={imageStyle()} src="https://i.ibb.co/HzjZj54/IMG-0175.jpg" alt="image of project"/>
    <div style={textStyle()}>
        <p>I am software engineer in the Seattle area.</p>
        <p>I got my start developing video games in college while pursuing a liberal arts degree. Then I attended Epicodus bootcamp.</p>
        <p>Most of my experience is in UWP C#, as well as Unity game Engine. Currently I am improving my skills in react, creating a full stack project.</p>

    </div>
  </div>
  )

// <a href="https://ibb.co/pzSqSYw"><img src="https://i.ibb.co/HzjZj54/IMG-0175.jpg" alt="IMG-0175" border="0"></a>
}

export default AboutMe;


//days at location
//produce/seaso