import "./SocialLogos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const SocialLogos = () => {
  return (
    <div className="social-logos">
      <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      <FontAwesomeIcon icon={faSquareFacebook} className="social-icon" />
    </div>
  );
};

export default SocialLogos;
