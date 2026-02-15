import React from "react";

const GlassCard = ({ width = "260px", height = "160px", children }) => {

  const glassStyle = {
    width,
    height,
    padding: "20px",
    borderRadius: "20px",
    position: "relative",

    /* Glossy Glass Background */
    background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08))",
    
    /* Softer, clean blur */
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",

    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden"
  };

  const shineStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "40%",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
    pointerEvents: "none"
  };

  return (
    <div style={glassStyle}>
      <div style={shineStyle}></div>
      {children}
    </div>
  );
};

export default GlassCard;
