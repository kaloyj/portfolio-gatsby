import React from "react";
import menuHoverStyles from "./css_modules/menu-hover.module.css";
const menuParentStyle = {
  gridArea: "menuarea",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
};

const col1 = {
  marginTop: "4%",
  marginLeft: "4%",
  flex: " 0 0 92%",
  border: "1px solid black"
};

const listStyle = {
  listStyle: "none",
  padding: "5%",
  border: "1px solid black"
};

const navMenuStyle = {
  flex: "0 0 92%",
  display: "flex",
  flexFlow: "row wrap",
  marginTop: "1%",
  marginLeft: "4%",
  position: "sticky",
  top: "1%",
  border: "2px solid yellow"
};

const Menu = () => (
  <div id="menu-column" style={menuParentStyle}>
    <div className="navMenu" style={navMenuStyle}>
      <div className={menuHoverStyles.menuList} style={col1}>
        <span>One</span>
        <ul style={listStyle}>
          <li>One point two</li>
          <li>One point two</li>
          <li>One point two</li>
          <li>One point two</li>
        </ul>
      </div>
      <div className={menuHoverStyles.menuList} style={col1}>
        <span>Two</span>
        <ul style={listStyle}>
          <li>One point two</li>
          <li>One point two</li>
          <li>One point two</li>
          <li>One point two</li>
        </ul>
      </div>
      <div className={menuHoverStyles.menuList} style={col1}>
        <span>Three</span>
        <ul style={listStyle}>
          <li>One point two</li>
          <li>One point two</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Menu;
