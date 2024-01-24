import generateLoremIpsum from "../Helpers/Lorem";

const employees = [
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "./assets/empl-1.jpg",
  },
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "/assets/empl-2.jpg",
  },
];
export default employees;
