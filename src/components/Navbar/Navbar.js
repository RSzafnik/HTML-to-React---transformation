import NavbarItem from "./NavbarItem";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main-container">
        <ul className="navbar-list">
          <NavbarItem>Moja Firma</NavbarItem>
          <NavbarItem href="#about-us">O Nas</NavbarItem>
          <NavbarItem href="#offer">Oferta</NavbarItem>
          <NavbarItem disabled>Kontakt</NavbarItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
