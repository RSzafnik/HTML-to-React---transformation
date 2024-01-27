import Box from "../components/Offers/Box";
const OfferBox = () => {
  const boxes = [
    { id: 1, isNew: true, name: "Usługa 1" },
    { id: 2, isNew: false, name: "Usługa 2" },
    { id: 3, isNew: false, name: "Usługa 3" },
    { id: 4, isNew: false, name: "Usługa 4" },
    { id: 5, isNew: false, name: "Usługa 5" },
    { id: 6, isNew: false, name: "Usługa 6" },
  ];
  return (
    <div className="offer-boxes">
      {boxes.map((box) => (
        <Box key={box.id} isNew={box.isNew} name={box.name} />
      ))}
    </div>
  );
};

export default OfferBox;
