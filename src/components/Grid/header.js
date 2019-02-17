import React from "react";

const headerParentStyle = {
  gridArea: "header",
  border: "2px solid orange",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#1c2541",
  position: "sticky",
  top: "0"
};

const col4 = {
  border: "1px solid black",
  margin: "1%",
  flex: "0 0 20%"
};

const titleStyle = {
  fontSize: "2em"
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
