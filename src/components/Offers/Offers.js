import React from "react";
import Box from "./Box";
import "./Offers.css";
import BoxHeading from "./BoxHeading";

const Offer = () => {
  const boxes = [
    { id: 1, isNew: true, name: "Usługa 1" },
    { id: 2, isNew: false, name: "Usługa 2" },
    { id: 3, isNew: false, name: "Usługa 3" },
    { id: 4, isNew: false, name: "Usługa 4" },
    { id: 5, isNew: false, name: "Usługa 5" },
    { id: 6, isNew: false, name: "Usługa 6" },
  ];

  return (
    <section id="offer" className="offer">
      <div className="main-container">
        <BoxHeading text="Czym zajmuję się nasza firma?" />
        <div className="offer-boxes">
          {boxes.map((box) => (
            <Box key={box.id} isNew={box.isNew} name={box.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
