import React from "react";
import { Radar } from "react-chartjs-2";

const proficiencyParentStyle = {
  gridArea: "tech",
  border: "1px solid black",
  display: "flex",
  flexFlow: "row wrap",
  alignContent: "flex-start"
};

const col1 = {
  marginTop: "4%",
  marginLeft: "4%",
  flex: "0 0 92%",
  border: "1px solid black"
};

const data = {
  labels: [
    "React",
    "Vue",
    "Angular",
    "CSS Grid & Flex",
    "Python",
    "Java",
    "PHP",
    "C"
  ],
  datasets: [
    {
      label: "My Skill Proficiency",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [5, 4, 3, 7, 5, 6, 5, 7]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    ticks: {
      beginAtZero: true,
      max: 10
    }
  }
};

const Proficiency = () => (
  <div style={proficiencyParentStyle}>
    <div style={col1}>Technology Proficiency</div>
    <div style={col1}>
      <Radar data={data} options={options} />
    </div>
  </div>
);

export default Proficiency;
