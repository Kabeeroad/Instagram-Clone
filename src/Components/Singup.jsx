import React from "react";
import "./Singup.css";
const Singup = () => {
  return (
    <div className="singup">
      <img src="logo.png" alt="" />
      <input type="email" placeholder="Email" />
      <input type="username" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  );
};

export default Singup;
