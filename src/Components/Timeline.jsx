import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { loginUser, logoutUser } from "../Features/UserSlice";
import { signOut } from "firebase/auth";

const Home = () => {
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };
  return (
    <div>
      <h1>HomePage🚀🚀🚀</h1>
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
};

export default Home;
