import React from "react";
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
  border: "1px solid black"
};

const ProjectsAndWorks = () => (
  <div style={worksParentStyle}>
    <div style={col1}>Bla!</div>
    <div style={col1}>Bla!</div>
    <div style={col1}>Bla!</div>
    <div style={col1}>Bla!</div>
    <div style={col1}>Bla!</div>
    <div style={col1}>Bla!</div>
  </div>
);

export default ProjectsAndWorks;
