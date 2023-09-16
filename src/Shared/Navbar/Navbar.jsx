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
      <div className="navbar bg-neutral-focus justify-between items-center px-6 sticky top-0 z-10 shadow-md">
        <ul className="navList">{navLinks}</ul>
        <ul>
          <li>
            <a href="facebook">fb</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
