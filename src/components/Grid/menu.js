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

const Menu = () => (
  <div id="menu-column" style={menuParentStyle}>
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
        <li>One point two</li>
        <li>One point two</li>
      </ul>
    </div>
    <div className={menuHoverStyles.menuList} style={col1}>
      <span>Four</span>
      <ul style={listStyle}>
        <li>One point two</li>
        <li>One point two</li>
        <li>One point two</li>
        <li>One point two</li>
      </ul>
    </div>
  </div>
);

export default Menu;
