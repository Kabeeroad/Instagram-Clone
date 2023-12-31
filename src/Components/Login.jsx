import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <img src="logo.png" alt="" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  );
};

export default Login;
