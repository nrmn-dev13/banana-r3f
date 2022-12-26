import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "white",
  };
  return (
    <header className="w-full relative z-10">
      <nav className="flex justify-end container mx-auto bg-transparent">
        <ul className="flex p-3">
          <li className="ml-0 mx-2 font-secondary">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-2 font-secondary">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="mx-2 mr-0 font-secondary">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/works"
            >
              Works
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
