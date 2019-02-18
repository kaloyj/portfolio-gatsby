import React from "react";
import ProjectCard from "../../templates/projectAndWorks/projectCard";
import WorkCarousel from "../WorkCarousel";

const worksParentStyle = {
  gridArea: "works",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
};

const col1 = {
  marginTop: "4%",
  marginLeft: "4%",
  flex: "0 0 92%",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap"
};

const ProjectsAndWorks = () => (
  <div style={worksParentStyle}>
    <div style={col1}>
      <WorkCarousel>
        <ProjectCard number="1" />
        <ProjectCard number="2" />
        <ProjectCard number="3" />
        <ProjectCard number="4" />
      </WorkCarousel>
    </div>
  </div>
);

export default ProjectsAndWorks;
