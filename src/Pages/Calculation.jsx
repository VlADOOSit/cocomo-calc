import KlocInput from "../Components/KlocInput/KlocInput";
import Dropdown from "../Components/Dropdown/Dropdown";
import Attributes from "../Components/Attributes/Attributes";
import useKlocStore from "../Store/KlocStore";
import useTeamTypeStore from "../Store/TeamTypeStore";
import useAttributesStore from "../Store/Attributes";
import { odds } from "./BaseOdds";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
function mulAttr(attr) {
  let result = 1;
  for (let key in attr) {
    result *= parseFloat(attr[key]);
  }
  return result;
}
const Calculation = () => {
  const klocValue = useKlocStore((state) => state.klocValue);
  const teamType = useTeamTypeStore((state) => state.TeamType);
  const attrValue = useAttributesStore((state) => state.Attr);
  function calcTest() {
    console.log(klocValue);
    console.log(teamType);
    console.log(attrValue);
    console.log(mulAttr(attrValue));
    console.log(odds[teamType].a);
  }

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <KlocInput />
      <Dropdown />

      <button onClick={toggle}>Toggle show</button>

      <CSSTransition
        in={isOpen}
        timeout={300} // Устанавливаем время анимации в миллисекундах
        classNames="fade"
        unmountOnExit // Опция для удаления компонента после анимации
      >
        <Attributes />
      </CSSTransition>
      <button onClick={calcTest}>TEST</button>
    </div>
  );
};

export default Calculation;
