"use client";

import "./Hero.css";
import defaultHero from "../../assets/imgs/hero.jpg";
import { motion, AnimatePresence } from "motion/react";

export default function Hero({ image, halfHeight = false }) {
  const imageUrl = typeof image === "string" ? image : defaultHero.src;

  return (
    <AnimatePresence mode="wait">
      <div className={`hero-section ${halfHeight ? "half-height" : ""}`}>
        <motion.div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="hero-img"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            opacity: { duration: 2, ease: "linear" },
            scale: { duration: 1.5, ease: "easeOut" },
          }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}
