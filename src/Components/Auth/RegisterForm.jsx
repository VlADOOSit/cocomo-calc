import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function RegisterForm() {
  const [user, setUser] = useState({});

  //const setIsAuth = useLoginStore((state) => state.setIsLogin);

  /*async function registerUser() {
    await register(user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
      })
      .catch((err) => {
        console.log(err.response);
        setError("ERROR");
      });
  }*/

  return (
    <div className={"auth_form"}>
      <h1>Sign up</h1>
      <input
        className={"auth_input"}
        type={"text"}
        onChange={(e) => setUser({ ...user, login: e.target.value })}
        placeholder={"Login"}
        size={25}
      />
      <input
        className={"auth_input"}
        type={"password"}
        onChange={(e) => setUser({ ...user, pass: e.target.value })}
        placeholder={"Password"}
        size={25}
      />
      <input
        className={"auth_input"}
        type={"password"}
        onChange={(e) => setUser({ ...user, pass: e.target.value })}
        placeholder={"Confirm password"}
        size={25}
      />
      <input
        className={"auth_input"}
        type={"text"}
        onChange={(e) => setUser({ ...user, fullName: e.target.value })}
        placeholder={"Full Name"}
        size={25}
      />
      <button className={"auth_btn"}>Register</button>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default RegisterForm;
