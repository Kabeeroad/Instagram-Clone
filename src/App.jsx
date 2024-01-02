import React, { useEffect } from "react";
import Authentiction from "./Components/Authentiction";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Components/Home";
import { loginUser, setLoading, userSlice } from "./Features/UserSlice";
import { auth } from "./firebase";

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
  return <div className="app">{user ? <Home /> : <Authentiction />}</div>;
};

export default App;
