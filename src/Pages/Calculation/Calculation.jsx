import KlocInput from "../../Components/KlocInput/KlocInput";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Attributes from "../../Components/Attributes/Attributes";
import Switch from "react-switch";
import useKlocStore from "../../Store/KlocStore";
import useTeamTypeStore from "../../Store/TeamTypeStore";
import useAttributesStore from "../../Store/Attributes";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Calculation.css";
import {
  BaseCocomoDevelopmentTime,
  BaseCocomoLaborIntensity,
  BaseCocomoNumberOfDevelopers,
} from "../../Utils/BaseCocomo";
import useLoginStore from "../../Store/LoginStore";
import { addCalcModel } from "../../Api/calcModels";

const Calculation = () => {
  const klocValue = useKlocStore((state) => state.klocValue);
  const teamType = useTeamTypeStore((state) => state.TeamType);
  const attrValue = useAttributesStore((state) => state.Attr);
  const isAuth = useLoginStore((state) => state.isLogin);

  const [baseLaborIntensity, setBaseLaborIntensity] = useState("0");
  const [baseDevelopmentTime, setBaseDevelopmentTime] = useState("0");
  const [baseNumberOfDevelopers, setBaseNumberOfDevelopers] = useState("0");

  const [conditionCalc, setConditionCalc] = useState(true);
  const [conditionSave, setConditionSave] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  async function calculate() {
    let laborIntensityNum = BaseCocomoLaborIntensity(klocValue, teamType);
    let developmentTimeNum = BaseCocomoDevelopmentTime(
      laborIntensityNum,
      teamType,
    );

    let numberOfDevelopersNum = BaseCocomoNumberOfDevelopers(
      laborIntensityNum,
      developmentTimeNum,
    );
    setBaseLaborIntensity(laborIntensityNum.toFixed(2));
    setBaseDevelopmentTime(developmentTimeNum.toFixed(2));
    setBaseNumberOfDevelopers(numberOfDevelopersNum.toFixed(2));

    await addCalcModel({
      project_type: teamType,
      saving_type: "history",
      kloc: klocValue,
      advancedFlag: false,
      rating_attr: attrValue,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function saveClickBase() {
    await addCalcModel({
      project_type: teamType,
      saving_type: "favorites",
      kloc: klocValue,
      advancedFlag: false,
      rating_attr: attrValue,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    if (!isNaN(klocValue)) {
      setConditionCalc(false);
      if (isAuth === true) {
        setConditionSave(false);
      }
    } else {
      setConditionCalc(true);
      setConditionSave(true);
    }
  }, [klocValue, isAuth]);

  return (
    <div>
      <div className={"base_calc_page"}>
        <div className={"base_calc_wrapper"}>
          <div className={"input_data_wrapper"}>
            <KlocInput value={klocValue} />
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
                {baseNumberOfDevelopers !== "NaN"
                  ? baseNumberOfDevelopers
                  : "0"}
              </div>
              <div className={"result_container_item_title"}>Персоналу</div>
            </div>
          </div>
          <div className={"base_calc_btn_wrapper"}>
            <div className={"base_calc_btn_container"}>
              <button
                disabled={conditionCalc}
                onClick={calculate}
                className={"base_calc_btn"}
              >
                Calculate
              </button>
              <button
                onClick={saveClickBase}
                disabled={conditionSave}
                className={"base_calc_btn"}
              >
                Save
              </button>
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
