import logo from "../../assets/icons/logo-dark.svg";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const [navbarOffset, setNavbarOffset] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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

  const currentPath = window.location.pathname;

  return (
    <>
      <div ref={navbarRef} className={isSticky ? "navbar sticky" : "navbar"}>
        <div className="navbar-wrapper">
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.location.reload();
              }
            }}
          >
            <Reveal>
              <img src={logo} alt="r—vis logo" height="32px" />
            </Reveal>
          </Link>
          <Reveal>
            <ul className="nav">
              <li>
                <a href="/" className={currentPath === "/" ? "active" : ""}>
                  home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  contact
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      <div className={isSticky ? "filler" : null} />
    </>
  );
};

export default Navbar;
