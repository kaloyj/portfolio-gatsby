import React from "react";

const parentProjectCardStyle = {
  background: "darkorange",
  textAlign: "center",
  padding: "50px",
  color: "white"
};

const projectCard = ({ number }) => (
  <div style={parentProjectCardStyle}>
    <h3>projectCard {number}!</h3>
  </div>
);

export default projectCard;
