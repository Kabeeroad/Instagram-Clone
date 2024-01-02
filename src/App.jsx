import React, { useEffect } from "react";
import Authentiction from "./Components/Authentiction";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Home";
import { loginUser, setLoading, userSlice } from "./Features/UserSlice";
import { auth } from "./firebase";
import "./app.css";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUsre) => {
      if (authUsre) {
        dispatch(
          loginUser({
            uid: authUsre.uid,
            username: authUsre.displayName,
            email: authUsre.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);
  const user = useSelector((state) => state.data.user.user);

  const isloading = useSelector((state) => state.data.user.isloading);
  return (
    <div className="app">
      {isloading ? (
        <div className="custom-loader-container">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <> {user ? <Home /> : <Authentiction />}</>
      )}
    </div>
  );
};

export default App;
