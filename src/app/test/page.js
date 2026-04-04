"use client";

import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useRef, useEffect, useState } from "react";

export default function Test() {
  const [isPinned, setIsPinned] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      const bottomOfDiv = rect.bottom;
      const windowHeight = window.innerHeight;

      setIsPinned(bottomOfDiv <= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <Navbar />
      <div
        ref={divRef}
        className={`main-section ${isPinned ? "pinned" : ""}`}
        style={{
          minHeight: "100vh",
          backgroundColor: "red",
        }}
      >
        <div className="container">
          <h1>Test</h1>
          {[...Array(20)].map((_, i) => (
            <p key={i}>Scroll content {i + 1}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
