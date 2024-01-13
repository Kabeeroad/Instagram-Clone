import React from "react";
import "./Sidenav.css";
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import ExploreIcon from "@mui/icons-material/Explore";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import ChatIcon from "@mui/icons-material/Chat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MenuIcon from "@mui/icons-material/Menu";
import { FaHome } from "react-icons/fa";
const Navigation = () => {
  return (
    <div className="sidenav">
      <img className="sidenav-logo" src="logo.png" alt="" />
      <div className="sidenavbuttons">
        <div className="side-button">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="side-button">
          <SearchIcon />
          <span>Search</span>
        </div>
        <div className="side-button">
          <ExploreIcon />
          <span>Explore</span>
        </div>
        <div className="side-button">
          <SlideshowIcon />
          <span></span>
        </div>
        <div className="side-button">
          <ChatIcon />
          <span>home</span>
        </div>
        <div className="side-button">
          <FavoriteBorderIcon />
          <span>home</span>
        </div>
        <div className="side-button">
          <AddCircleOutlineIcon />
          <span>home</span>
        </div>
        <div className="side-button">
          <MenuIcon />
          <span>home</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
