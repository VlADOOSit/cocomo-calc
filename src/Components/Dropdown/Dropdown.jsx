import "./Dropdown.css";
import useTeamTypeStore from "../../Store/TeamTypeStore";

const Dropdown = () => {
  const TeamType = useTeamTypeStore((state) => state.TeamType);
  const setTeamType = useTeamTypeStore((state) => state.setTeamType);

  return (
    <div>
      <select
        value={TeamType}
        onChange={(e) => setTeamType(e.target.value)}
        className={"dropdown_project_type"}
      >
        <option value="organic">Organic</option>

        <option value="semidetached">Semidetach</option>

        <option value="embedded">Embedded</option>
      </select>
    </div>
  );
};

export default Dropdown;
