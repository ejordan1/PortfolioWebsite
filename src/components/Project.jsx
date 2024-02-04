import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Project(props){
    var projectStyle = () => {
        return {
        border: "5px solid black",
        width: "400px",
        height: "250px"
    }
};
  return (
    <div style={projectStyle()}>
      {/* <Link style = {titleStyle()} to={`/${props.name}`}>{props.name}</Link>  */}
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h2>{props.technologies}</h2>
    </div>
  );
}

Project.PropTypes= {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  // imgurl: PropTypes.string,
  technologies: PropTypes.string
};


export default Project;