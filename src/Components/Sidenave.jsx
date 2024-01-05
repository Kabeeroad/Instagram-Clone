import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
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
