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

// eslint-disable-next-line
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
      <div style={col1}>Education</div>
      <div style={col2_1}>
        <div style={col1}>High School</div>
      </div>
      <div style={col2_3}>
        <div style={col1}>St. Joseph's Academy</div>
        <div style={col1}>3rd Honorable Mention</div>
        <div style={col1}>I am MANDAUE Awardee</div>
      </div>
      <div style={col2_1}>
        <div style={col1}>Bachelor's Degree</div>
      </div>
      <div style={col2_3}>
        <div style={col1}>University of San Carlos</div>
        <div style={col1}>Bachelor of Science in Computer Science</div>
        <div style={col1}>Magna Cum Laude</div>
        <div style={col1}>1.25 GWA</div>
      </div>
    </div>

    <div style={col1}>
      <div style={col1}>Experience</div>
      <div style={col2_1}>
        <div style={col1}>Full Scale</div>
      </div>
      <div style={col2_3}>
        <div style={col1}>Front End Developer</div>
        <div style={col1}>January 2019 - Present</div>
        <div style={col1}>Vue and React</div>
      </div>
      <div style={col2_1}>
        <div style={col1}>Coding Avenue</div>
      </div>
      <div style={col2_3}>
        <div style={col1}>On the Job Trainee</div>
        <div style={col1}>April 2018 - August 2018</div>
        <div style={col1}>Symfony</div>
      </div>
    </div>
  </div>
);

export default Content;
