import "./index.css";
export default function LeftNavBar() {
  return (
    <div className="users-container">
      <ul className="users">
        <li className="user">
          <a href=""> Adam Smith</a>
        </li>
        <li className="user">
          <a href="">Mishel Jhones</a>
        </li>
        <li className="user">
          <a href="">Lara Hofman</a>
        </li>
        <li className="user">
          <a href="">Alex Dark</a>
        </li>
      </ul>
    </div>
  );
}
