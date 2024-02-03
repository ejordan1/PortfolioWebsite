import React from "react";
import PropTypes from "prop-types";

function WorkHistory(props) {
  var containerStyle = () => {
    return {
      width: "300",
      height: "300",
      border: "5px solid blue",
      padding: "30px",
    };
  };

  var JobTitleStyle = () => {
    return {
      color: "blue",
      fontSize: "20",
    };
  };
  return (
    <div style={containerStyle()}>
      <img src="" alt={`image of `} />
      <h1>WorkHistory</h1>
      <h2 style={JobTitleStyle()}>Securitas</h2>
      <p>Security Guard</p>
      <h2>Microsoft</h2>
      <p>Vendor 1.5 years</p>

      <p></p>
    </div>
  );
}

export default WorkHistory;

//location, date, name, picture, description
