import React, { useState } from "react";
import "./Singup.css";
const Singup = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log(username);

  return (
    <div className="singup">
      <img src="logo.png" alt="" />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="username"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button>Log in</button>
    </div>
  );
};

export default Singup;
