import { useEffect } from "react";
//import { logout } from "../../../Api/auth";
import { Link } from "react-router-dom";
import useLoginStore from "../../../Store/LoginStore";
import "./Sidebar.css";
import { logout } from "../../../Api/auth";

function AuthButton() {
  const isAuth = useLoginStore((state) => state.isLogin);
  const setIsAuth = useLoginStore((state) => state.setIsLogin);

  async function click() {
    if (isAuth) {
      await logout()
        .then()
        .catch((e) => console.log(e));
      setIsAuth(false);
      localStorage.setItem("isAuth", "false");
      localStorage.removeItem("token");
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
      <Link to={"/"} onClick={click}>
        <div className={`sidebar__menu__item`}>
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="sidebar__menu__item__text">Log out</div>
        </div>
      </Link>
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
