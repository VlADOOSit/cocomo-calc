import "./Attributes.css";
import useAttributesStore from "../../Store/Attributes";
import { radioGroups } from "../../Constants/AttributesConstants";
import { useEffect, useState } from "react";
import useKlocStore from "../../Store/KlocStore";
import useTeamTypeStore from "../../Store/TeamTypeStore";
import { CocomoLaborIntensity } from "../../Utils/CocomoII";
import { odds } from "../../Constants/Odds";
import calcRft from "../../Utils/CalcRft";
import {
  BaseCocomoDevelopmentTime,
  BaseCocomoNumberOfDevelopers,
} from "../../Utils/BaseCocomo";
import { baseOdds } from "../../Constants/BaseOdds";

const Attributes = () => {
  const attr = useAttributesStore((state) => state.Attr);
  const setAttr = useAttributesStore((state) => state.setAttributes);

  const klocValue = useKlocStore((state) => state.klocValue);
  const teamType = useTeamTypeStore((state) => state.TeamType);

  const [baseLaborIntensity, setBaseLaborIntensity] = useState("0");
  const [baseDevelopmentTime, setBaseDevelopmentTime] = useState("0");
  const [baseNumberOfDevelopers, setBaseNumberOfDevelopers] = useState("0");

  const setDefaultAttr = useAttributesStore(
    (state) => state.setDefaultAttributes,
  );

  useEffect(() => {
    setDefaultAttr();
    //eslint-disable-next-line
  }, []);

  const handleRadioChange = (groupName, btnValue) => {
    setAttr({
      ...attr,
      [groupName]: btnValue,
    });
  };

  function calcAttr() {
    let rft = calcRft(attr);

    let laborIntensityNum = CocomoLaborIntensity(
      odds[teamType].a,
      odds[teamType].b,
      klocValue,
      rft,
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
  }

  return (
    <div className={"attr_form"}>
      <div className={"attr_header"}>
        <div className={"attr_header_item"}>Дуже низький</div>
        <div className={"attr_header_item"}>Низький</div>
        <div className={"attr_header_item"}>Середній</div>
        <div className={"attr_header_item"}>Високий</div>
        <div className={"attr_header_item"}>Дуже високий</div>
        <div className={"attr_header_item"}>Критичний</div>
      </div>
      {radioGroups.map((group, index) => (
        <div className={"attr_wrapper"} key={index}>
          <div className={"attr_input_group"}>
            <div className={"group_title"}>{group.title}</div>
            {group.options.map((option, optionIndex) => (
              <label className={"attr_input"} key={optionIndex}>
                <input
                  type="radio"
                  name={group.name}
                  value={option}
                  id={`${group.name} ${option} ${optionIndex}`}
                  disabled={option === "-"}
                  defaultChecked={option === "1"}
                  onChange={() => handleRadioChange(group.name, option)}
                />
                <div>
                  <label
                    className={"label_value"}
                    htmlFor={`${group.name} ${option} ${optionIndex}`}
                  >
                    {option}
                  </label>
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div>
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
              {baseNumberOfDevelopers !== "0.00" ? baseNumberOfDevelopers : "0"}
            </div>
            <div className={"result_container_item_title"}>Персоналу</div>
          </div>
        </div>
        <div className={"base_calc_btn_wrapper"}>
          <button onClick={calcAttr} className={"base_calc_btn"}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
