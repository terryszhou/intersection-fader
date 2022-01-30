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
      className="chakra-vertical"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "none" : "translateY(10vh)"}
      visibility={isVisible ? "visible" : "hidden"}
      transition={"opacity 400ms ease-out, transform 100ms ease-out, visibility 400ms ease-out"}
      willChange={"opacity, transform, visibility"}
      ref={domRef}
      _hover={{
        "& ~ .chakra-vertical": {
          transform: "translateY(30px)",
          transition: "transform 100ms ease-out",
        }
      }}>
      {children}
    </Box>
  );
};