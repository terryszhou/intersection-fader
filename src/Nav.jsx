import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <nav style={styles.navbar}>
    <div style={{ float: "right" }}>
      <NavLink to="/" exact style={styles.navlink}>Vertical</NavLink>
      <NavLink to="/horizontal" style={styles.navlink}>Horizontal</NavLink>
    </div>
  </nav>
);

const styles = {
  navbar: {
    backgroundColor: 'rgb(51,51,51)',
    padding: "20px",
    position: "fixed",
    width: "100vw",
    zIndex: 2,
  },
  navlink: {
    margin: "0 10px",
    fontSize: 24,
    color: "white",
  },
};