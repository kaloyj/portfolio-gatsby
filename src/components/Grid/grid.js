import React from "react";
import Header from "./header";
import ProfileColumn from "./profile";
import ContentColumn from "./content";
import MenuColumn from "./menu";
import ProjectsAndWorks from "./projectsAndWorks";
import Proficiency from "./proficiency";

const gridContainer = {
  display: "grid",
  border: "1px solid black",
  minWidth: "100vh",
  gridTemplateRows: "min-content 0.5fr 31.5fr 0.5fr 14fr 0.5fr 14fr",
  gridTemplateColumns: "0.5fr 15fr 0.5fr 35fr 0.5fr 10fr 0.5fr",
  gridTemplateAreas: `
    'header header header header header menuarea menuarea'
    '. . . . . menuarea menuarea'
    '. profile . contentarea . menuarea menuarea'
    '. . . . . menuarea menuarea'
    '. works works works . menuarea menuarea'
    '. . . . . menuarea menuarea'
    '. tech tech tech . menuarea menuarea'
    `
};

class Grid extends React.Component {
  render() {
    return (
      <div style={gridContainer}>
        <Header />
        <ProfileColumn />
        <ContentColumn />
        <ProjectsAndWorks />
        <Proficiency />
        <MenuColumn />
      </div>
    );
  }
}

export default Grid;
