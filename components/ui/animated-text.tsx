"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  style,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const words = text.split(" ");

  return (
    <motion.h1
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className="inline"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
}