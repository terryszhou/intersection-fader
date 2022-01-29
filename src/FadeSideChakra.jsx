import { Box } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

export const FadeSideChakra = ({ children }) => {
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
      className="chakra-card"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "none" : "translateX(10vw)"}
      visibility={isVisible ? "visible" : "hidden"}
      transition={"opacity 400ms ease-out, transform 100ms ease-out, visibility 400ms ease-out"}
      willChange={"opacity, transform, visibility"}
      ref={domRef}
      _hover={{
        "& ~ .chakra-card": {
          transform: "translateX(30px)",
          transition: "transform 100ms ease-out"
        }
      }}>
      {children}
    </Box>
  );
};