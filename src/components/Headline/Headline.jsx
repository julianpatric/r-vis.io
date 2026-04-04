"use client";

import { motion } from "motion/react";
import "./Headline.css";

export default function Headline({ children }) {
  const words = children.split(" ");

  return (
    <div className="headline-section">
      <h1>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.3 }}
            style={{
              display: "inline-block",
              marginRight: i < words.length - 1 ? "0.25em" : "0",
            }}
          >
            {i < words.length - 1 ? `${word} ` : word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
