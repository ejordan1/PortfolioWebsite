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
            technologies={project.technologies}
          ></Project>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
