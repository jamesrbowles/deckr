import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        className="nav-icon"
      >
        <Hamburger />
      </div>

      {isMenuToggled && (
        <ul className="navbar">
          <li>
            <Link
              to="/"
              className="nav-links"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-links"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-links"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
