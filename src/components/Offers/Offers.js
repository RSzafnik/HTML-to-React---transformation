import "./Offers.css";
import OffersHeading from "./OffersHeading";
import Box from "./Box";
import boxes from "../../Data/boxes";
const Offers = () => {
  return (
    <section id="offer" className="offer">
      <div className="main-container">
        <OffersHeading text="Czym zajmuję się nasza firma?" />
        <div className="offer-boxes">
          {boxes.map((box) => (
            <Box key={box.id} isNew={box.isNew} name={box.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
