import EmployeeImage from "./EmployeeImage";
import Description from "./Description";
import "./EmployeeCard.css";

const EmployeeCard = ({ name, position, description, image }) => (
  <div className="employee">
    <EmployeeImage image={image} />
    <div className="employee-info">
      <h3 className="employee-name">
        {name} [{position}]
      </h3>
      <Description text={description} />
    </div>
  </div>
);

export default EmployeeCard;
