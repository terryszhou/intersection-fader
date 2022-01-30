import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const [href, setHref] = useState("vertical");

  return (
    <nav style={styles.navbar}>
      <div style={{ float: "right" }}>
        <NavLink
          to="/"
          exact
          className="navlink"
          onClick={() => setHref("vertical")}>
          Vertical
        </NavLink>
        <NavLink
          to="/horizontal"
          className="navlink"
          onClick={() => setHref("horizontal")}>
          Horizontal
        </NavLink>
        <div style={{
          position: "relative",
          height: "2px",
          backgroundColor: "white",
          borderRadius: "15px",
          width: href === "vertical" ? 65 : 84, 
          left: href === "vertical" ? 8 : 85,
          transitionDuration: "0.2s",
        }}/>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'rgb(51,51,51)',
    padding: "20px",
    position: "fixed",
    width: "100vw",
    zIndex: 2,
  },
};