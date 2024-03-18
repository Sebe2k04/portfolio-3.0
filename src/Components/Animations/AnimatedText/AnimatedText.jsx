import React from "react";
import { motion, spring } from "framer-motion";

const AnimatedText = ({ text }) => {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
    opacity: 1,
    y: 0,
    
    },
  };
  return (
    <div>
      <motion.span
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren:0.01}}
        aria-hidden
      >
        {text.split("").map((char) => (
          <motion.span className="" variants={defaultAnimation}>{char}</motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
