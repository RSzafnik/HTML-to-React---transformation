import "./Box.css";

const Box = ({ isNew, name }) => {
  return (
    <div className={`offer-box ${isNew ? "new-box" : ""}`}>
      {`${name} ${isNew ? "(nowość)" : ""}`}
      {isNew && <div className="new-dot"></div>}
    </div>
  );
};

export default Box;
