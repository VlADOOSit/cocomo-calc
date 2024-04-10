import useKlocStore from "../../Store/KlocStore";
import "./KlocInput.css";

const KlocInput = () => {
  const setKlocStore = useKlocStore((state) => state.setKloc);

  function onChangeHandler(e) {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setKlocStore(value);
    }
  }

  return (
    <div>
      <input
        className={"kloc_input"}
        type={"number"}
        onChange={(e) => onChangeHandler(e)}
        placeholder={"kloc"}
        size={25}
      />
    </div>
  );
};

export default KlocInput;
