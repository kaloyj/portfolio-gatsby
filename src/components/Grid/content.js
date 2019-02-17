import React from "react";
// import ContentCard from "../../templates/content/contentCard";

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

const contentData = [
  {
    header: "Education",
    data: [
      {
        subItem: "High School",
        subDescriptions: {
          main: "St. Joseph's Academy",
          date: "March 2015",
          descriptions: ["3rd Honorable Mention", "I am MANDAUE Awardee"]
        }
      },
      {
        subItem: "Bachelor's Degree",
        subDescriptions: {
          main: "University of San Carlos",
          date: "December 2018",
          descriptions: [
            "Bachelor of Science in Computer Science",
            "Magna Cum Laude",
            "1.25 GWA"
          ]
        }
      }
    ]
  },
  {
    header: "Work Experience",
    data: [
      {
        subItem: "Full Scale",
        subDescriptions: {
          main: "Front End Developer",
          date: "January 2019 - Present",
          descriptions: ["Vue and React"]
        }
      },
      {
        subItem: "Coding Avenue",
        subDescriptions: {
          main: "On the Job Trainee",
          date: "April 2018 - August 2018",
          descriptions: ["Symfony"]
        }
      }
    ]
  }
];

const Content = () => (
  // change to something dynamic!
  <div id="content-column" style={contentParentStyle}>
    {contentData.map(el => {
      return (
        <>
          <div style={col1}>{el.header}</div>
          {el.data.map(peice => {
            return (
              <>
                <div style={col2_1}>{peice.subItem}</div>
                <div style={col2_3}>
                  <div style={col1}>{peice.subDescriptions.main}</div>
                  <div style={col1}>{peice.subDescriptions.date}</div>
                  {peice.subDescriptions.descriptions.map(descp => (
                    <div style={col1}>{descp}</div>
                  ))}
                </div>
              </>
            );
          })}
        </>
      );
    })}
  </div>
);

export default Content;
