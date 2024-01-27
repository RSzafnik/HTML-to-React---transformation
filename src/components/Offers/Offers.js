import "./Offers.css";
import OffersHeading from "./OffersHeading";
import OfferBox from "../../Data/OfferBox";

const Offers = () => {
  return (
    <section id="offer" className="offer">
      <div className="main-container">
        <OffersHeading text="Czym zajmuję się nasza firma?" />
        <div className="offer-boxes">
          <OfferBox />
        </div>
      </div>
    </section>
  );
};

export default Offers;
