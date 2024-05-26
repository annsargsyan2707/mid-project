import UserShortInfo from "./UserShortInfo";
import UserFullInfo from "./UserFullInfo";
import "./index.css";

export default function UserInfo() {
  return (
    <div className="user-info-container">
      <UserShortInfo />
      <UserFullInfo />
    </div>
  );
}
