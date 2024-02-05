import React from "react";
import Seasons from "./Seasons";
import GetProjectsData from "./ProjectsData";
import Project from "./Project";

function ProjectsList() {
  var ProjectsStyle = () => {
    return {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px 20px",
      maxWidth: "1000px",
      marginLeft: "auto",
      marginRight: "auto"
    };
  };

  return (
    <div style={ProjectsStyle()}>
      {console.log(GetProjectsData())}
      {GetProjectsData().map((project, index) => (
        // <Seasons name={season.name}
        //   // imgurl={season.imgurl}
        //   items={season.items}
        //   key={index}/>
        <div>
          <Project
            name={project.name}
            description={project.description}
            coolImplementation={project.coolImplementation}
            imgurl={project.imgurl}
            key={index}
          ></Project>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
