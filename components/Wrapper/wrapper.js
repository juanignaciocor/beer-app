import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
};

export default Wrapper;
