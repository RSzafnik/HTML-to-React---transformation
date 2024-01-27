import Heading from "./Heading.js";
import Paragraph from "./Paragraph.js";
import OfferButton from "./OfferButton.js";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section id="landing-page" className="landing-page">
      <div className="landing-overlay">
        <div className="main-container">
          <Heading text="Nasza firma oferuje najwyższej jakości produkty" />
          <Paragraph text="Nie wierz nam na słowo - sprawdź" />
          <OfferButton text="oferta" href="#offer" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
