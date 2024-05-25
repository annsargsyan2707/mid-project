import Details from "./Details.jsx";
import Search from "./Search.jsx";
import logo from "../img/img1.jpg";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logo} className="logo" />
      </div>
      <Details />
      <Search />
    </div>
  );
}
