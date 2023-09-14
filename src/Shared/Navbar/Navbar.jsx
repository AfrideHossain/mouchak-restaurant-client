import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Our menu</NavLink>
      </li>
      <li>
        <NavLink to="/">About us</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact us</NavLink>
      </li>
    </>
  );
  return (
    //   Desktop view
    <>
      <div className="navbar">
        <ul className="navList">{navLinks}</ul>
        <div>User</div>
      </div>
    </>
  );
};

export default Navbar;
