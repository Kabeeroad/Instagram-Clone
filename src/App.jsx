import React from "react";
import Authentiction from "./Components/Authentiction";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import { userSlice } from "./Features/UserSlice";

const App = () => {
  const user = useSelector((state) => state.data.user.user);
  console.log(user);
  return <div className="app">{user ? <Home /> : <Authentiction />}</div>;
};

export default App;
