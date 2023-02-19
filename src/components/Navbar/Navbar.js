import { useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { useCardContext } from "../../hooks/Context";
import { useUserContext } from "../../hooks/AuthContext";
import logo from "../../util/nav-logo.png";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const Navbar = () => {
  const { isMenuToggled, setIsMenuToggled } = useCardContext();
  const { user, logout } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
      console.log("You are logged out");
      setIsMenuToggled(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleClickAway = () => {
    setIsMenuToggled(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <nav className="fixed top-0 flex justify-between w-full z-10 transition all">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 ml-3" />
          </Link>
          <div className="flex items-center">
            {!isMenuToggled && (
              <>
                {!user && (
                  <Link
                    to="/login"
                    className="mr-3 fancy word text-lg font-opensans"
                  >
                    Login
                  </Link>
                )}

                {!user && (
                  <Link
                    to="/sign-up"
                    className="mr-3 fancy word text-lg font-opensans"
                  >
                    Get Started
                  </Link>
                )}
              </>
            )}

            <div
              className={
                isMenuToggled ? "hover:opacity-50 transition-all z-10" : "z-10"
              }
            >
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
            <div className="flex flex-col">
              <li>
                <Link
                  to="/"
                  className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  Contact
                </Link>
              </li>
            </div>
            <div className="flex flex-col">
              {user && (
                <li>
                  <Link
                    to="/account"
                    className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    Account
                  </Link>
                </li>
              )}
              <li>
                {user ? (
                  <div
                    className="cursor-pointer fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    Login
                  </Link>
                )}
              </li>
              {!user && (
                <li>
                  <Link
                    to="/sign-up"
                    className="fancy word text-lg py-4 block hover:bg-white hover:bg-opacity-20 font-opensans"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    Get Started
                  </Link>
                </li>
              )}
            </div>
          </ul>
        )}
      </nav>
    </ClickAwayListener>
  );
};

export default Navbar;
