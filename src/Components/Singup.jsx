import React, { useState } from "react";
import "./Singup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
const Singup = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSingup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        // alert(err);
      });
  };

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
      <button onClick={handleSingup}>Log in</button>
    </div>
  );
};

export default Singup;
