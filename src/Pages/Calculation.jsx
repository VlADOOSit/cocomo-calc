import KlocInput from "../Components/KlocInput/KlocInput";
import Dropdown from "../Components/Dropdown/Dropdown";
import Attributes from "../Components/Attributes/Attributes";
import useKlocStore from "../Store/KlocStore";
import useTeamTypeStore from "../Store/TeamTypeStore";
import useAttributesStore from "../Store/Attributes";
import { odds } from "./BaseOdds";

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

  return (
    <div>
      This is Calculation page
      <KlocInput />
      <Dropdown />
      <Attributes />
      <button onClick={calcTest}>TEST</button>
    </div>
  );
};

export default Calculation;
