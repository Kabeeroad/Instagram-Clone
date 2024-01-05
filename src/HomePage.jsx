import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { loginUser, logoutUser } from "./Features/UserSlice";
import { signOut } from "firebase/auth";
import Timeline from "./Components/Timeline";
import Sidenave from "./Components/Sidenave";
const HomePage = () => {
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };
  return (
    <div>
      <div className="homepage-nav">
        <Sidenave />
      </div>
      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
