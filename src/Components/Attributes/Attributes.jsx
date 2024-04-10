import "./Attributes.css";
import useAttributesStore from "../../Store/Attributes";
import { radioGroups } from "./AttributesConstants";

const Attributes = () => {
  const attr = useAttributesStore((state) => state.Attr);
  const setAttr = useAttributesStore((state) => state.setAttributes);

  const handleRadioChange = (groupName, btnValue) => {
    setAttr({
      ...attr,
      [groupName]: btnValue,
    });
  };

  return (
    <div className={"attr_form"}>
      {radioGroups.map((group, index) => (
        <div className={"attr_wrapper"} key={index}>
          <label className={"attr_input_group"}>
            <div className={"group_title"}>{group.title}</div>
            {group.options.map((option, optionIndex) => (
              <div className={"attr_input"} key={optionIndex}>
                <input
                  type="radio"
                  name={group.name}
                  value={option}
                  id={option}
                  disabled={option === "-"}
                  defaultChecked={option === "1"}
                  onChange={() => handleRadioChange(group.name, option)}
                />
                <div>
                  <label htmlFor={option}>{option}</label>
                </div>
              </div>
            ))}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
