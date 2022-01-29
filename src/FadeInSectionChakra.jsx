import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

export const FadeInSectionChakra = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "none" : "translateY(10vh)"}
      visibility={isVisible ? "visible" : "hidden"}
      transition={"opacity 600ms ease-out, transform 600ms ease-out, visibility 600ms ease-out"}
      willChange={"opacity, transform, visibility"}
      ref={domRef}>
      {children}
    </Box>
  );
};