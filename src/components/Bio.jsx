import React from "react";
import PropTypes from "prop-types";
import WorkHistory from "./WorkHistory";
import EducationBox from "./EducationBox";

function Bio(props) {
    var getStyle = () => {
        return  {
            
          
          display: "flex",
          gap: "20px",
            flexWrap: "wrap",
            margin: "50px",
            justifyContent: "space-around",
        };
      };

      
      return (
        <div style = {getStyle()} class = "biobox">
          <WorkHistory/>
          <EducationBox/>
        </div>
        
      );
}

export default Bio;

//location, date, name, picture, description
