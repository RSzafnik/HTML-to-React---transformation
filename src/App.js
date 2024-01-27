import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import LandingPage from "./components/Land/LandingPage.js";
import About from "./components/About/About.js";
import Offers from "./components/Offers/Offers.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Offers />
      <Footer />
    </>
  );
};

export default App;
