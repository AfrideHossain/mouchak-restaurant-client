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
      <div className="navbar bg-neutral justify-between items-center px-6 sticky top-0 z-10 shadow-md">
        <div className="site-name">
          <h1 className="text-4xl font-extrabold tracking-wider text-white uppercase">
            Mouchak
          </h1>
          <h3 className="text-white text-2xl font-semibold tracking-widest uppercase">
            Restaurant
          </h3>
        </div>
        <ul className="navList">{navLinks}</ul>
        {/* <button className="btn btn-primary">Login</button> */}
      </div>
    </>
  );
};

export default Navbar;
