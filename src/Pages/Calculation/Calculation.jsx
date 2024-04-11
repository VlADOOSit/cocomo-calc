import KlocInput from "../../Components/KlocInput/KlocInput";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Attributes from "../../Components/Attributes/Attributes";
import Switch from "react-switch";
import useKlocStore from "../../Store/KlocStore";
import useTeamTypeStore from "../../Store/TeamTypeStore";
import useAttributesStore from "../../Store/Attributes";
import { baseOdds } from "../../Constants/BaseOdds";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Calculation.css";
import calcRft from "../../Utils/CalcRft";
import {
  BaseCocomoDevelopmentTime,
  BaseCocomoLaborIntensity,
  BaseCocomoNumberOfDevelopers,
} from "../../Utils/BaseCocomo";

const Calculation = () => {
  const klocValue = useKlocStore((state) => state.klocValue);
  const teamType = useTeamTypeStore((state) => state.TeamType);
  const attrValue = useAttributesStore((state) => state.Attr);

  const [baseLaborIntensity, setBaseLaborIntensity] = useState("0");
  const [baseDevelopmentTime, setBaseDevelopmentTime] = useState("0");
  const [baseNumberOfDevelopers, setBaseNumberOfDevelopers] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  function calcTest() {
    let laborIntensityNum = BaseCocomoLaborIntensity(
      baseOdds[teamType].a,
      baseOdds[teamType].b,
      klocValue,
    );
    let developmentTimeNum = BaseCocomoDevelopmentTime(
      baseOdds[teamType].c,
      baseOdds[teamType].d,
      laborIntensityNum,
    );

    let numberOfDevelopersNum = BaseCocomoNumberOfDevelopers(
      laborIntensityNum,
      developmentTimeNum,
    );
    setBaseLaborIntensity(laborIntensityNum.toFixed(2));
    setBaseDevelopmentTime(developmentTimeNum.toFixed(2));
    setBaseNumberOfDevelopers(numberOfDevelopersNum.toFixed(2));

    console.log(klocValue);
    console.log(teamType);
    console.log(attrValue);
    console.log(calcRft(attrValue));
    console.log(baseOdds[teamType].a);
  }

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <div className={"base_calc_page"}>
        <div className={"base_calc_wrapper"}>
          <div className={"input_data_wrapper"}>
            <KlocInput />
            <Dropdown />
          </div>
          <div className={"result_container"}>
            <div className={"result_container_item"}>
              <div className={"result_container_item_value"}>
                {baseLaborIntensity !== "0.00" ? baseLaborIntensity : "0"}
              </div>
              <div className={"result_container_item_title"}>Людина-місяць</div>
            </div>
            <div className={"result_container_item"}>
              <div className={"result_container_item_value"}>
                {baseDevelopmentTime !== "0.00" ? baseDevelopmentTime : "0"}
              </div>
              <div className={"result_container_item_title"}>Місяців</div>
            </div>
            <div className={"result_container_item"}>
              <div className={"result_container_item_value"}>
                {baseNumberOfDevelopers !== "0.00"
                  ? baseNumberOfDevelopers
                  : "0"}
              </div>
              <div className={"result_container_item_title"}>Персоналу</div>
            </div>
          </div>
          <div className={"base_calc_btn_wrapper"}>
            <div className={"base_calc_btn_container"}>
              <button onClick={calcTest} className={"base_calc_btn"}>
                Calculate
              </button>
              <button className={"base_calc_btn"}>Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className={"switch_container"}>
        <div className={"switch_wrapper"}>
          <div className={"switch_title"}>Більш точна модель</div>
          <div>
            <Switch
              onColor={"#ad8eff"}
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={toggle}
              checked={isOpen}
            />
          </div>
        </div>
      </div>

      <div className={"attr_form_page"}>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Attributes />
        </CSSTransition>
      </div>
    </div>
  );
};

export default Calculation;
