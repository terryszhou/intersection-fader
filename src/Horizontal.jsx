import React from "react";

import { colors } from "./css-colors";
import { FadeSide } from "./FadeSide";

export const Horizontal = () => {
  return (
    <div className="App">
      <h1>All the CSS Colors!</h1>
        <div style={styles.rowContainer}>
          <h1 style={styles.rowHeader}>Standard Implementation</h1>
          {colors.map(color => (
            <FadeSide>
              <div className="box2" style={{ backgroundColor: color }}>
                <span>{color}</span>
              </div>
            </FadeSide>
          ))}
        </div>
    </div>
  );
};

const styles = {
  rowContainer: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    overflow: "scroll"
  },

  rowHeader: {
    margin: "0 20px",
    fontWeight: "bold",
  }
};