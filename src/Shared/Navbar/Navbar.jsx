import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

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
      <div className="navbar justify-between items-center sticky top-0 z-10 shadow-md">
        <ul className="navList">{navLinks}</ul>
        <ul>
          <li>
            <a href="https://facebook.com">
              <BsFacebook size="24px" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <BsInstagram size="24px" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <BsYoutube size="24px" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
