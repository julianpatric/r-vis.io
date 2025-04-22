import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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

      console.log("Scroll values:", {
        bottomOfDiv,
        windowHeight,
        isAtBottom: bottomOfDiv <= windowHeight,
      });

      setIsPinned(bottomOfDiv <= windowHeight);
    };

    console.log("Setting up window scroll listener");
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      console.log("Cleaning up window scroll listener");
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
          {/* Add some content to make it scrollable */}
          {[...Array(20)].map((_, i) => (
            <p key={i}>Scroll content {i + 1}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
