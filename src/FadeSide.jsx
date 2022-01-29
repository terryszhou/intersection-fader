import React, { useState, useEffect, useRef } from "react";

export const FadeSide = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className={`fade-side-section ${isVisible && 'is-visible'}`} ref={domRef}>
      {children}
    </div>
  );
};