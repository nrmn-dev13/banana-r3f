import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full relative z-10">
      <nav className="flex justify-end container mx-auto bg-transparent">
        <ul className="flex p-3">
          <li className="ml-0 mx-2 font-secondary">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 font-secondary">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 mr-0 font-secondary">
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
