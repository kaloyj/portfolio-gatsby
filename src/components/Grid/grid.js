import React from "react";
import Header from "./header";
import ProfileColumn from "./profile";
import ContentColumn from "./content";
import MenuColumn from "./menu";

const imgStyle = {
  height: "100%",
  width: "100%",
  objectFit: "cover"
};

const gridContainer = {
  display: "grid",
  border: "1px solid black",
  minHeight: "100vh",
  minWidth: "100vh",
  gridTemplateRows: "5fr 1fr 58fr",
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
