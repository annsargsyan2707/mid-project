import img from "../img/img3.jpg";
import "./index.css";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-img-div">
        <img src={img} />
      </div>
      <div className="slider-text">
        <h2> Bali</h2>
        <p>
          <span style={{ fontWeight: "bold", color: "#078a7b" }}>Bali </span>
          is a province of Indonesia and the westernmost of the Lesser Sunda
          Islands. East of Java and west of Lombok, the province includes the
          island of Bali and a few smaller offshore islands, notably Nusa
          Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.
        </p>
      </div>
    </div>
  );
}
