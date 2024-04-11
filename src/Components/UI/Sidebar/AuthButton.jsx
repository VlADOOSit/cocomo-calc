import { useEffect } from "react";
//import { logout } from "../../../Api/auth";
import { Link } from "react-router-dom";
import useLoginStore from "../../../Store/LogiStore";
import "./Sidebar.css";

function AuthButton() {
  const isAuth = useLoginStore((state) => state.isLogin);
  const setIsAuth = useLoginStore((state) => state.setIsLogin);

  async function click() {
    if (isAuth) {
      setIsAuth(false);
      localStorage.setItem("isAuth", "false");
      localStorage.removeItem("token");
      localStorage.removeItem("avatar");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    // eslint-disable-next-line
  }, []);

  if (isAuth) {
    return (
      <div>
        <button className={"logout_btn"} onClick={click}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <Link to={"/login"}>
      <div className={`sidebar__menu__item`}>
        <div className="sidebar__menu__item__icon">
          <i className="bx bx-log-in"></i>
        </div>
        <div className="sidebar__menu__item__text">Log in</div>
      </div>
    </Link>
  );
}

export default AuthButton;
