import React from "react";
import PropTypes from "prop-types";
import WorkHistory from "./WorkHistory";
import EducationBox from "./EducationBox";

function FeaturedProject(props) {
  const getStyle = () => {
    return {
      marginLeft: "auto",
      marginRight: "auto",
      border: "5px solid blue",
      width: "600px",
      padding: "50px",
    };
  };

  const titleStyle = () => {
    return {
      textAlign: "center",
    };
  };

  const videoStyle = () => {
    return {
      width: "600",
      height: "500"
    };
  };

  return (
    <div style={getStyle()}>
      <h1 style={titleStyle()}>Superballs</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CmIgM7eTjDw?si=hdkyrKtTUBvSCq4X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}

export default FeaturedProject;

//location, date, name, picture, description
