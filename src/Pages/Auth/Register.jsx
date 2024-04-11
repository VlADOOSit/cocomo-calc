import "../../Components/Auth/Auth.css";
import background from "../../assets/f84aa10d-ebeb-42dd-b31b-51b2727490db.png";
import RegisterForm from "../../Components/Auth/RegisterForm";

function Register() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterForm />
    </div>
  );
}

export default Register;
