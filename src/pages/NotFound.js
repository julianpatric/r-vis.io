import Navbar from "../components/Navbar/Navbar";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <Navbar />
        <div className="wrapper">
          <h2>Page not found</h2>
          <p>This page was moved, removed, or might never have existed.</p>
          <Button to="/">Back to Homepage</Button>
        </div>
        <div className="footer">
          <p>Error 404</p>
          <p>©2025 r—vis. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
