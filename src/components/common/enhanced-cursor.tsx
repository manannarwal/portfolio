"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorTrail {
  x: number;
  y: number;
  id: number;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trails, setTrails] = useState<CursorTrail[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Add trail effect
      setTrails((prevTrails) => {
        const newTrail = {
          x: e.clientX - 4,
          y: e.clientY - 4,
          id: trailId++,
        };
        
        const updatedTrails = [newTrail, ...prevTrails.slice(0, 4)];
        return updatedTrails;
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.role === "button" ||
        target.classList.contains("magnetic-button")
      ) {
        setIsHovering(true);
        setCursorVariant("button");
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setIsHovering(true);
        setCursorVariant("text");
      } else if (target.classList.contains("project-card") || target.closest(".project-card")) {
        setIsHovering(true);
        setCursorVariant("view");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(139, 92, 246, 0.8)",
    },
    button: {
      scale: 1.5,
      backgroundColor: "rgba(6, 182, 212, 0.8)",
    },
    text: {
      scale: 0.8,
      backgroundColor: "rgba(34, 197, 94, 0.8)",
    },
    view: {
      scale: 2,
      backgroundColor: "rgba(249, 115, 22, 0.8)",
    },
  };

  const getCursorText = () => {
    return ""; // Removed all text effects
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] flex items-center justify-center"
        variants={cursorVariants}
        animate={cursorVariant}
        initial="default"
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          mixBlendMode: "difference",
          transform: `scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        {/* Cursor text removed */}
      </motion.div>

      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            left: trail.x,
            top: trail.y,
            width: `${8 - index * 1.5}px`,
            height: `${8 - index * 1.5}px`,
            backgroundColor: `rgba(139, 92, 246, ${0.4 - index * 0.1})`,
          }}
        />
      ))}
    </>
  );
}
