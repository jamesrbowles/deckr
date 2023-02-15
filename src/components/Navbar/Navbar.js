import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './Navbar.css';
import { useCardContext } from '../../hooks/Context';

const Navbar = () => {
  const { isMenuToggled, setIsMenuToggled } = useCardContext();
  return (
    <nav>
      <div className={isMenuToggled ? 'close-nav nav-icon' : 'nav-icon'}>
        <Hamburger
          label="Show menu"
          toggled={isMenuToggled}
          toggle={setIsMenuToggled}
        />
      </div>

      {isMenuToggled && (
        <ul className="navbar-open">
          <li>
            <Link
              to="/"
              className="nav-links fancy word"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-links fancy word"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-links fancy word"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sign-out"
              className="nav-links fancy word signout"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              Sign Out
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
