import React from "react";

const col1 = {
  marginTop: "2%",
  marginLeft: "4%",
  flex: "0 0 92%",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap"
};

const col2_1 = {
  marginLeft: "4%",
  flex: "0 0 20%",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap"
};

const col2_3 = {
  marginLeft: "4%",
  flex: "0 0 68%",
  border: "1px solid black"
};

const contentCard = ({ header, data }) => (
  <div style={col1} class="content-card">
    <div style={col1}>{header}</div>
    {data.map(item => (
      <div style={col1}>
        <div style={col2_1}>{item.subItem}</div>
        <div style={col2_3}>
          <div style={col1}>{item.subDescriptions.main}</div>
          <div style={col1}>{item.subDescriptions.date}</div>
          {item.subDescriptions.descriptions.map(descp => (
            <div style={col1}>{descp}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default contentCard;
