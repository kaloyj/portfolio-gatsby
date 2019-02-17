import React from "react";
const proficiencyParentStyle = {
  gridArea: "tech",
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

const Proficiency = () => (
  <div style={proficiencyParentStyle}>
    <div style={col1}>React - 5!</div>
    <div style={col1}>Vue - 4!</div>
    <div style={col1}>Angular - 3!</div>
    <div style={col1}>CSS Grid and Flex - 7!</div>
    <div style={col1}>C - 7!</div>
    <div style={col1}>Java - 6!</div>
    <div style={col1}>Python - 5!</div>
    <div style={col1}>PHP - 5!</div>
    <div style={col1}>JavaScript - 6!</div>
  </div>
);

export default Proficiency;
