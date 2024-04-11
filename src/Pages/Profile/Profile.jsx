import "./Profile.css";
import History from "../../Components/History/History";
import Switch from "react-switch";
import { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
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
          checked={isOpen}
        />
      </div>

      <History
        Id={2345}
        LaborIntensity={"31.83"}
        DevelopmentTime={"12.99"}
        NumberOfDevelopers={"5.98"}
        Klok={"13"}
        ProjectType={"Organic"}
      />
      <History
        Id={31}
        LaborIntensity={"313.83"}
        DevelopmentTime={"122.99"}
        NumberOfDevelopers={"19.98"}
        Klok={"23"}
        ProjectType={"Organic"}
      />
      <History
        Id={2543}
        Klok={"2"}
        ProjectType={"Organic"}
        LaborIntensity={"3.83"}
        DevelopmentTime={"1.99"}
        NumberOfDevelopers={"4.98"}
      />
    </div>
  );
};

export default Profile;
