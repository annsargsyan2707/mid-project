import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import Header from "./Header/Header.jsx";
import Slider from "./Slider/Slider.jsx";
import UserPart from "./UserPart/UserPart.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Slider />
      <UserPart />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
