import "./Profile.css";
import History from "../../Components/History/History";
import Switch from "react-switch";
import { useEffect, useState } from "react";
import { getCalcModels } from "../../Api/calcModels";
import useLoginStore from "../../Store/LoginStore";
import { CocomoLaborIntensity } from "../../Utils/CocomoII";
import calcRft from "../../Utils/CalcRft";
import {
  BaseCocomoDevelopmentTime,
  BaseCocomoLaborIntensity,
  BaseCocomoNumberOfDevelopers,
} from "../../Utils/BaseCocomo";

const Profile = () => {
  const [isFavorites, setSsFavorites] = useState(false);
  const [calcModels, setCalcModels] = useState([]);
  const isAuth = useLoginStore((state) => state.isLogin);

  function toggle() {
    setSsFavorites((isOpen) => !isOpen);
  }

  useEffect(() => {
    if (isAuth) {
      let savingType;
      if (isFavorites) {
        savingType = "favorites";
      } else {
        savingType = "history";
      }
      async function fetchData() {
        const response = await getCalcModels(savingType);
        setCalcModels(response.data);
      }
      fetchData()
        .then()
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line
  }, [isAuth, isFavorites]);

  function calcLI(flag, kloc, teamType, attr) {
    if (!flag) {
      return BaseCocomoLaborIntensity(kloc, teamType);
    }
    return CocomoLaborIntensity(kloc, calcRft(attr), teamType);
  }

  function calcDT(flag, kloc, teamType, attr) {
    let LI;
    if (!flag) {
      LI = BaseCocomoLaborIntensity(kloc, teamType);
    } else {
      LI = CocomoLaborIntensity(kloc, calcRft(attr), teamType);
    }
    return BaseCocomoDevelopmentTime(LI, teamType);
  }

  function calcND(flag, kloc, teamType, attr) {
    let LI;
    if (!flag) {
      LI = BaseCocomoLaborIntensity(kloc, teamType);
    } else {
      LI = CocomoLaborIntensity(kloc, calcRft(attr), teamType);
    }
    let ND = BaseCocomoDevelopmentTime(LI, teamType);

    return BaseCocomoNumberOfDevelopers(LI, ND);
  }

  return (
    <div>
      <div className={"history_switch"}>
        <div className={"history_switch_title"}>Перемкнутись на обране</div>
        <Switch
          onColor={"#ad8eff"}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={toggle}
          checked={isFavorites}
        />
      </div>

      {calcModels.length > 0 ? (
        calcModels.map((calcModel) => [
          <History
            key={calcModel.id}
            Id={calcModel.id}
            LaborIntensity={calcLI(
              calcModel.advancedFlag,
              calcModel.kloc,
              calcModel.project_type,
              calcModel.rating_attr,
            )}
            DevelopmentTime={calcDT(
              calcModel.advancedFlag,
              calcModel.kloc,
              calcModel.project_type,
              calcModel.rating_attr,
            )}
            NumberOfDevelopers={calcND(
              calcModel.advancedFlag,
              calcModel.kloc,
              calcModel.project_type,
              calcModel.rating_attr,
            )}
            Klok={calcModel.kloc}
            ProjectType={calcModel.project_type}
          />,
        ])
      ) : (
        <div style={{ marginTop: "40px", fontSize: "32px" }}>
          Posts not found
        </div>
      )}
    </div>
  );
};

export default Profile;
