import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import './Navbar.css';
import { useCardContext } from '../../hooks/Context';

const Navbar = () => {
  const { isMenuToggled, setIsMenuToggled } = useCardContext();
  return (
    <nav>
      <div className="top-nav">
        <Link
          to="/"
          className="nav-logo nav-links"
        >
          Logo
        </Link>
        <div className="top-nav-right">
          {!isMenuToggled && (
            <>
              <Link
                to="/login"
                className="top-nav-link nav-links fancy word"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="top-nav-link nav-links fancy word"
              >
                Get Started
              </Link>
            </>
          )}

          <div className={isMenuToggled ? 'close-nav nav-icon' : 'nav-icon'}>
            <Hamburger
              label="Show menu"
              toggled={isMenuToggled}
              toggle={setIsMenuToggled}
            />
          </div>
        </div>
      </div>

      {isMenuToggled && (
        <ul className="navbar-open">
          <div className="nav-main-links">
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
          </div>
          <div className="nav-account-links">
            <li>
              <Link
                to="/login"
                className="nav-links fancy word signout"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links fancy word signout"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Get Started
              </Link>
            </li>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
