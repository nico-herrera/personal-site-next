import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);

      // Check if the element or any of its parents are clickable
      const isClickable =
        computedStyle.cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick != null ||
        target.closest('a, button, [role="button"]') != null;

      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-neon-blue rounded-full opacity-30 animate-pulse-slow" />
          <div className="absolute inset-0 border border-neon-blue rounded-full" />
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-neon-blue rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
        }}
      />
    </>
  );
}
