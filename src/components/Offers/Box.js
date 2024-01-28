import "./Box.css";

const Box = ({ isNew, name }) => {
  return (
    <div className={`offer-box ${isNew ? "new-box" : ""}`}>
      <div className="offer-box-content">
        {`${name} ${isNew ? "(nowość)" : ""}`}
      </div>
      {isNew && <div className="new-dot"></div>}
    </div>
  );
};

export default Box;
