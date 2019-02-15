import React from "react";

const headerParentStyle = {
  gridArea: "header",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  backgroundColor: "#0b132b",
  color: "#fff"
};

const col4 = {
  border: "1px solid black",
  marginLeft: "4%",
  flex: "0 0 20%"
};

const titleStyle = {
  fontSize: "2em",
  border: "1px solid white"
};

const Header = () => (
  <div id="header" style={headerParentStyle}>
    <div className="header-col-4 title" style={{ ...col4, ...titleStyle }}>
      Carlo Janea
    </div>
    <div className="header-col-4">Current page here</div>
  </div>
);

export default Header;
