import { Link } from "react-router-dom";
import background from "../assets/f84aa10d-ebeb-42dd-b31b-51b2727490db.png";

function Main() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ paddingTop: "400px", color: "#ffffff", fontSize: "44px" }}>
        Welcome to <span style={{ color: "#ad8eff" }}>COCOMO</span> calc
      </h1>
      <div style={{ marginTop: "70px" }}>
        <Link
          style={{
            fontSize: "38px",
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#ad8eff",
            padding: "10px 30px",
            borderRadius: "20px",
          }}
          to={"/menu/calculation"}
        >
          Start
        </Link>
      </div>
    </div>
  );
}

export default Main;
