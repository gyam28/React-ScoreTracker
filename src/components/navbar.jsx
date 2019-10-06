import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        opacity: ".6",
        boxShadow: "2px 1px rgba(0, 0, 0, 0.2)"
      }}
    >
      <span className="navbar-brand mb-0 h1" style={{ color: "black" }}>
        My ScoreTracker
      </span>
    </nav>
  );
};

export default NavBar;
