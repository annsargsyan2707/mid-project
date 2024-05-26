import image from "../img/img4.avif";
import "./index.css";

export default function UserShortInfo() {
  const obj = {
    age: 32,
    lastVisit: "1 week ago",
  };
  return (
    <div className="shortInfoContainer">
      <div className="short-img-container">
        <img src={image} className="user-img" />
      </div>
      <div>
        <h4>Mark Anderson</h4>
        <span>
          <p> Age: {obj.age}</p> Last visit: {obj.lastVisit}
        </span>
      </div>
    </div>
  );
}
