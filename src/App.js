import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Menu from "./Pages/Menu";
import Blank from "./Pages/Blank";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />}>
          <Route index element={<Blank />} />
          <Route path="/menu/calculation" element={<Blank />} />
          <Route path="/menu/about" element={<Blank />} />
          <Route path="/menu/user" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
