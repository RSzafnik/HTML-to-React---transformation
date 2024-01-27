import "./EmployeeImage.css";

const EmployeeImage = ({ image }) => (
  <div
    className="employee-image"
    style={{ backgroundImage: `url(${image})` }}
  ></div>
);

export default EmployeeImage;
