const NavbarItem = ({ children, href, disabled }) => {
  return (
    <li className={`navbar-item ${disabled ? "navbar-disabled" : ""}`}>
      {href ? (
        <a href={href} className="navbar-link">
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
};

export default NavbarItem;
