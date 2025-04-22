import logo from "../../assets/icons/logo-dark.svg";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <>
      <div className="navbar">
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
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  contact
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Navbar;
