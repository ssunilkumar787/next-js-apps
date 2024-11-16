import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    border: "1px solid #ddd",
    display: "flex",
    justifyContentCenter: "center",
    alignItems: "center",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
