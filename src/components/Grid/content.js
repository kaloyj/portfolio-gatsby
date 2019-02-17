import React from "react";
import ContentCard from "../../templates/content/contentCard";

const contentParentStyle = {
  gridArea: "contentarea",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
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
  <div id="content-column" style={contentParentStyle}>
    {contentData.map(el => (
      <ContentCard header={el.header} data={el.data} key={el.header} />
    ))}
  </div>
);

export default Content;
