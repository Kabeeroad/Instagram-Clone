import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Singup from "./Singup";

const Authentiction = () => {
  const [active, setActive] = useState("login");
  return (
    <div className="authentication">
      <div className="left-auth">
        <img src="/auth.png" alt="" />
      </div>
      <div className="right-auth">
        <Singup />
        <div className="more-auth">
          <span>
            {active === "login" ? (
              <>
                Don't have an account? <button>Sing Up</button>
              </>
            ) : (
              <>
                Have an account? <button>Login</button>
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
