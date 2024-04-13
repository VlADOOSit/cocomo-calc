import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Auth.css";
import useLoginStore from "../../Store/LoginStore";
import checkAuth from "../../Utils/authService";
import { login } from "../../Api/auth";

function LoginForm() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const isAuth = useLoginStore((state) => state.isLogin);
  const setIsAuth = useLoginStore((state) => state.setIsLogin);

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

  async function loginUser() {
    console.log(user);
    await login(user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data.message);
      });
  }

  if (isAuth) {
    return <Navigate to={"/menu/calculation"} />;
  }

  return (
    <div className={"auth_form"}>
      <h1>Sign in</h1>
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
      <button onClick={loginUser} className={"auth_btn"}>
        Login
      </button>
      <Link className={"refLog"} to={"/register"}>
        Register
      </Link>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  );
}

export default LoginForm;
