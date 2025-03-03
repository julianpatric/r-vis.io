import logo from "../../assets/icons/logo.svg";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const [navbarOffset, setNavbarOffset] = useState(0);

  useEffect(() => {
    setNavbarOffset(navbarRef.current?.offsetTop || 0); // Get navbar's initial position

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > navbarOffset) {
        setIsSticky(true); // Stick when scrolled past navbar's position
      } else {
        setIsSticky(false); // Unstick when back to original position
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarOffset]);

  return (
    <>
      <div ref={navbarRef} className={isSticky ? "navbar sticky" : "navbar"}>
        <div className="navbar-wrapper">
          <Link to="/" className="image-link">
            <img src={logo} alt="r—vis logo" height="32px" />
          </Link>
          <ul className="nav">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={isSticky ? "filler" : null} />
    </>
  );
};

export default Navbar;
