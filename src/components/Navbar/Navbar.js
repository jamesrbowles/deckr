import { useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { useCardContext } from "../../hooks/Context";
import { useUserContext } from "../../hooks/AuthContext";

const Navbar = () => {
  const { isMenuToggled, setIsMenuToggled } = useCardContext();
  const { user, logout } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("You are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="fixed top-0 flex justify-between w-full z-10">
      <div className="w-full flex justify-between">
        <Link to="/" className="">
          Logo
        </Link>
        <div className="flex items-center">
          {!isMenuToggled && (
            <>
              {user ? (
                <div
                  className="cursor-pointer mr-3 fancy word text-lg"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              ) : (
                <Link to="/login" className="mr-3 fancy word text-lg">
                  Login
                </Link>
              )}

              <Link to="/sign-up" className="mr-3 fancy word text-lg">
                Get Started
              </Link>
            </>
          )}

          <div className={isMenuToggled ? "close-nav nav-icon" : "nav-icon"}>
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
                className="fancy word text-lg"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="fancy word text-lg"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="fancy word text-lg"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Contact
              </Link>
            </li>
          </div>
          <div className="nav-account-links">
            <li>
              <Link
                to="/account"
                className="fancy word signout text-lg"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="fancy word signout text-lg"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Login
              </Link>
            </li>
            <li className="sidebar-links">
              <Link
                to="/sign-up"
                className="sidebar-links fancy word signout text-lg"
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
