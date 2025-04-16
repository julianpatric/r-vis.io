import Navbar from "../components/Navbar/Navbar";
import "../styles/NotFound.css";
import Button from "../components/Button/Button";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404: Page not found | r—vis</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="not-found">
        <Navbar />
        <div className="wrapper">
          <p style={{ color: "grey" }}>Error 404</p>
          <h2>Page not found</h2>
          <p>This page was moved, removed, or might never have existed.</p>
          <Button to="/">Back to Homepage</Button>
        </div>
        <div className="footer">
          <p style={{ color: "grey" }}>©2025 r—vis. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
