import React from "react";
import PropTypes from "prop-types";

function EducationBox(props) {
  var getStyle = () => {
    return {
      width: "300",
      height: "300",
      border: "5px solid blue",
      padding: "30px"
    };
  };
  return (
    <div style={getStyle()}>
      <img  src="" alt={`image of `} />
      <h1>EducationBox</h1>
      <p>Work experience</p>
      <p></p>
    </div>
  );
}

export default EducationBox;

//location, date, name, picture, description
