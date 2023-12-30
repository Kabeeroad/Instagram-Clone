import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter />
    <ChakraProvider theme={theme}>
      <App />
      {/* <AuthPage /> */}
      <AuthFrom />
    </ChakraProvider>
  </React.StrictMode>
);
