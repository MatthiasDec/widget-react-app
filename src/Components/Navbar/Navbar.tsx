import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
