import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Project(props){
    var projectStyle = () => {
        return {
        border: "5px solid black",
        width: "390px",
        height: "600px",
        margin: "15px"
            }
    };

    var imageStyle = () => {
        return {
            objectFit: "fill",
            width: "100%",
            height: "40%",
            }
    };

    var projectInfoStyle = () => {
        return {
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            }
    };

    var titleStyle = () => {
        return {
            fontSize: "20px",
            textAlign: "center"
            }
    };

    var title2Style = () => {
        return {
            fontSize: "17px",
            textAlign: "center"
            }
    };

  return (
    <div style={projectStyle()}>
      {/* <Link style = {titleStyle()} to={`/${props.name}`}>{props.name}</Link>  */}
      {/* <h1>{props.name}</h1>
      <h2>{props.description}</h2> */}
      <iframe style ={imageStyle()} src={props.imgurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div style = {projectInfoStyle()}>
        <h1 style ={titleStyle()}>
            {props.name}
        </h1>
        <p>{props.description}</p>
        <h2 style={title2Style()}><em>What is cool about this implementation?</em></h2>
        <p>{props.coolImplementation}</p>
      </div>
      
    </div>
  );
}
// "https://i.ibb.co/DC1YFv7/Screenshot-2024-02-04-at-11-09-44-AM.png"
Project.PropTypes= {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgurl: PropTypes.string,
  coolImplementation: PropTypes.string
};


export default Project;


