import useKlocStore from "../../Store/KlocStore";
import "./KlocInput.css";

const KlocInput = (props) => {
  const setKlocStore = useKlocStore((state) => state.setKloc);

  function onChangeHandler(e) {
    console.log(e.target.value);
    const value = parseFloat(e.target.value);
    setKlocStore(value);
  }

  return (
    <div>
      <div className={"kloc_input_title"}>KLOC</div>
      <input
        className={"kloc_input"}
        type={"number"}
        value={props.value}
        onChange={(e) => onChangeHandler(e)}
        placeholder={"kloc"}
        size={25}
      />
    </div>
  );
};

export default KlocInput;
