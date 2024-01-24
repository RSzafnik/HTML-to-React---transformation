import React from "react";
import EmployeeCard from "./EmployeeCard";
import Heading from "./Heading";
import "./About.css";
import generateLoremIpsum from "../../Helpers/Lorem";

const employees = [
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "./assets/empl-1.jpg",
  },
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "/assets/empl-2.jpg",
  },
];

const About = () => (
  <section id="about-us" className="about-us">
    <div className="main-container">
      <Heading text="Nasi specjaliści" />
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          position={employee.position}
          description={employee.description}
          image={employee.image}
        />
      ))}
    </div>
  </section>
);

export default About;
