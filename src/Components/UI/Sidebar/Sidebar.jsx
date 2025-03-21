import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import AuthButton from "./AuthButton";

const sidebarNavItems = [
  {
    display: "Main Page",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Calculation",
    icon: <i className="bx bx-calculator"></i>,
    to: "/menu/calculation",
    section: "calculation",
  },
  {
    display: "About Us",
    icon: <i className="bx bx-conversation"></i>,
    to: "https://github.com/VlADOOSit",
    section: "about",
  },
  {
    display: "User",
    icon: <i className="bx bx-user"></i>,
    to: "/menu/user",
    section: "user",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item",
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[2];
    if (curPath) {
      const activeItem = sidebarNavItems.findIndex(
        (item) => item.section === curPath,
      );
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">COCOMO</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
        <AuthButton />
      </div>
    </div>
  );
};

export default Sidebar;
