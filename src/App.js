import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Menu from "./Pages/Menu";
import Calculation from "./Pages/Calculation/Calculation";
import "boxicons/css/boxicons.min.css";
import Profile from "./Pages/Profile/Profile";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="/menu" element={<Menu />}>
          <Route index element={<Calculation />} />
          <Route path="/menu/calculation" element={<Calculation />} />
          <Route path="/menu/about" element={<About />} />
          <Route path="/menu/user" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
