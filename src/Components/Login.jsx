import React, { useState } from "react";
import "./login.css";
import { signInwithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = () => {
    signInwithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="login">
      <img src="logo.png" alt="" />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handlelogin}>Login</button>
    </div>
  );
};

export default Login;
