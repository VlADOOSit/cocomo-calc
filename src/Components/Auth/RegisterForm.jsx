import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Auth.css";
import useLoginStore from "../../Store/LoginStore";
import { register } from "../../Api/auth";
import checkAuth from "../../Utils/authService";

function RegisterForm() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const setIsAuth = useLoginStore((state) => state.setIsLogin);
  const isAuth = useLoginStore((state) => state.isLogin);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth().then((res) => {
        if (res) {
          setIsAuth(true);
          localStorage.setItem("isAuth", "true");
        }
      });
    }
    // eslint-disable-next-line
  }, []);
  async function registerUser() {
    await register(user)
      .then((response) => {
        setIsAuth(true);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("isAuth", "true");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }

  if (isAuth) {
    return <Navigate to={"/menu/calculation"} />;
  }

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
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder={"Password"}
        size={25}
      />
      <input
        className={"auth_input"}
        type={"password"}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder={"Confirm password"}
        size={25}
      />
      <input
        className={"auth_input"}
        type={"text"}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder={"Full Name"}
        size={25}
      />
      <button onClick={registerUser} className={"auth_btn"}>
        Register
      </button>
      <br />
      <Link to={"/login"}>Login</Link>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  );
}

export default RegisterForm;
