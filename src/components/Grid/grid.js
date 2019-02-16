import React from "react";
import Header from "./header";
import ProfileColumn from "./profile";
import ContentColumn from "./content";
import MenuColumn from "./menu";

const gridContainer = {
  display: "grid",
  border: "1px solid black",
  minHeight: "100vh",
  minWidth: "100vh",
  gridTemplateRows: "3fr 1fr 60fr",
  gridTemplateColumns: "0.5fr 15fr 0.5fr 35fr 0.5fr 10fr 0.5fr",
  gridTemplateAreas: `
    'header header header header header header header'
    '. . . . . menuarea menuarea'
    '. profile . contentarea . menuarea menuarea'
    `
};

class Grid extends React.Component {
  render() {
    return (
      <div style={gridContainer}>
        <Header />
        <ProfileColumn />
        <ContentColumn />
        <MenuColumn />
      </div>
    );
  }
}

export default Grid;
