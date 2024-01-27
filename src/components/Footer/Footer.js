import FooterText from "./FooterText";
import SocialLogos from "./SocialLogos";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="main-container">
        <FooterText text="Nazwa firmy - Wszelkie prawa zastrzeżone." />
        <SocialLogos />
      </div>
    </footer>
  );
};

export default Footer;
