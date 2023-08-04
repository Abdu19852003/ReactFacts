import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./component/Nav.jsx";
import Page from "./component/Page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Page />
  </React.StrictMode>
);
