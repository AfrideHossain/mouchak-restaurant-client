import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menus">Our menu</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact us</NavLink>
      </li>
    </>
  );
  return (
    //   Desktop view
    <>
      <div className="navbar">
        <div>
          <h1 className="text-white text-3xl font-bold">Mouchak</h1>
          <h3 className="text-white text-2xl font-semibold">Restaurant</h3>
        </div>
        <ul className="navList">{navLinks}</ul>
      </div>
    </>
  );
};

export default Navbar;
