import "./OfferButton.css";
const OfferButton = ({ text, href }) => {
  return (
    <a href={href} className="btn-offer">
      {text}
    </a>
  );
};

export default OfferButton;
