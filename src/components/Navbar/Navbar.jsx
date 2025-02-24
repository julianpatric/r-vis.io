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
          <img src={logo} alt="Logo" height="32px" />
          <ul className="nav">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="/about.js">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={isSticky ? "filler" : null} />
    </>
  );
};

export default Navbar;
