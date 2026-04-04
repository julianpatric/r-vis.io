"use client";

import logo from "../../assets/icons/logo-dark.svg";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Reveal } from "../Reveal";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <Link
            href="/"
            onClick={(e) => {
              if (currentPath === "/") {
                e.preventDefault();
                window.location.reload();
              }
            }}
          >
            <Reveal>
              <img src={logo.src} alt="r—vis logo" height="32px" />
            </Reveal>
          </Link>
          <Reveal>
            <ul className="nav">
              <li>
                <Link href="/" className={currentPath === "/" ? "active" : ""}>
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentPath === "/about" ? "active" : ""}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
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
