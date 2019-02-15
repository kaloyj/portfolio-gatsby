import React from "react";

const contentParentStyle = {
  gridArea: "contentarea",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
};

const col1 = {
  marginTop: "2%",
  marginLeft: "4%",
  flex: "0 0 92%",
  border: "1px solid black"
};

const col2 = {
  marginLeft: "4%",
  flex: "0 0 44%",
  border: "1px solid black"
};

const pageTitleStyle = {
  fontSize: "3em",
  fontWeight: "100",
  textAlign: "center",
  marginLeft: "20%",
  marginRight: "20%",
  borderBottom: "3px solid lightgrey",
  border: "1px solid black"
};

const Content = () => (
  // change to something dynamic!
  <div id="content-column" style={contentParentStyle}>
    <div style={col1}>
      <div>About!</div>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
    <div style={col1}>
      <p className="page-title">About!</p>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
    <div style={col1}>
      <p className="page-title">About!</p>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
    <div style={col2}>
      <p>Test</p>
    </div>
  </div>
);

export default Content;
