import React from "react";

import mainpic from "./gradpic.png";

const imgStyle = {
  height: "100%",
  width: "100%",
  objectFit: "cover"
};

const parentProfileStyle = {
  gridArea: "profile",
  borderRight: "3px solid #0b132b",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
};

const col1 = {
  marginLeft: "4%",
  marginTop: "4%",
  flex: "0 0 92%",
  border: "1px solid black"
};

const circleStyle = {
  overflow: "hidden",
  height: "120px",
  width: "120px",
  borderRadius: " 100%",
  margin: "0 auto",
  boxShadow: "0px 0px 15px #c0c0c0"
};

const labelStyle = {
  fontWeight: "600",
  fontSize: "1.5em"
};

const ProfileColumn = () => (
  <div id="profile-column" style={parentProfileStyle}>
    <div style={col1}>
      <div className="image-circle" style={circleStyle}>
        <img
          src={mainpic}
          alt="Carlo Janea's pic"
          className="mainpic"
          style={imgStyle}
        />
      </div>
    </div>
    <div style={col1}>
      <div className="label-title" style={labelStyle}>
        Bio
      </div>
    </div>
    <div style={col1}>
      Lorem ipsum dolor sit amet, arcu suspendisse lectus in, arcu ultricies
      maecenas ligula, egestas velit pellentesque. Amet ante aliquam diam duis
      fusce, dictum commodo, congue et vitae platea, mi nullam. Elementum
      vestibulum fringilla ipsum at. Aliquam laoreet dolor integer phasellus
      nulla, quam sed nisl lacus a mauris, lorem elementum ut ultricies elit et
      vestibulum, massa sit risus velit, vitae habitant lacus wisi sed. Quis
      aliquip elit mus sollicitudin nulla, mi ipsum nunc dolore et nec, faucibus
      ut id praesent vehicula scelerisque, lorem vivamus pellentesque ac in.
      Vestibulum maecenas habitasse. Fringilla a ac,
    </div>
  </div>
);

export default ProfileColumn;
