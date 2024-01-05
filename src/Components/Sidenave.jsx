import React from "react";
import "./Sidenav.css";
const Navigation = () => {
  return (
    <div className="sidenav">
      <img className="sidenav-logo" src="logo.png" alt="" />
      <div className="sidenavbuttons">
        <div className="side-button">
          {/* icon */}
          <span>home</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
