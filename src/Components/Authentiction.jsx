import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Singup from "./Singup";

const Authentiction = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "singup" : "login");
  };
  return (
    <div className="authentication">
      <div className="left-auth">
        <img src="/auth.png" alt="" />
      </div>
      <div className="right-auth">
        {active === "login" ? <Login /> : <Singup />}
        <div className="more-auth">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange}>Sing Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
        {/* <div className="logos">
          <p>Get the app</p>
          <img src="microsoft.png" alt="" />
          <img src="playstore.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Authentiction;
