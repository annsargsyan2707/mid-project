import LeftNavBar from "../LeftNavBar/LeftNavBar.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";
import "./index.css";

export default function UserPart() {
  return (
    <div className="main-container">
      <LeftNavBar />
      <UserInfo />
    </div>
  );
}
