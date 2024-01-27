import EmployeeCard from "./EmployeeCard";
import Heading from "./Heading";
import "./About.css";
import employees from "../../Data/Employees";

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
