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
        <button className="sidenae-button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenae-button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenae-button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenae-button">
          <SlideshowIcon />
          <span>movie</span>
        </button>
        <button className="sidenae-button">
          <ChatIcon />
          <span>home</span>
        </button>
        <button className="sidenae-button">
          <FavoriteBorderIcon />
          <span>home</span>
        </button>
        <button className="sidenae-button">
          <AddCircleOutlineIcon />
          <span>home</span>
        </button>
        <button className="sidenae-button">
          <MenuIcon />
          <span>home</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
