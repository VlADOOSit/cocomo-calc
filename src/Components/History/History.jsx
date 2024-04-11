import "./History.css";

const History = (props) => {
  return (
    <div>
      <div className={"history_container"}>
        <div className={"history_wrapper"}>
          <div className={"history_item_id"}>ID {props.Id}</div>
          <div className={"history_input_data_wrapper"}>
            <div>
              <span className={"result_history_item"}>Kloc</span>:{" "}
              <span className={"result_history_value"}>{props.Klok}</span>
            </div>
            <div>
              <span className={"result_history_item"}>Тип проекту</span>:{" "}
              <span className={"result_history_value"}>
                {props.ProjectType}
              </span>
            </div>
          </div>
          <div className={"history_data_container"}>
            <div className={"history_data_container_item"}>
              <span className={"result_history_item"}>Трудомісткість</span>:{" "}
              <span className={"result_history_value"}>
                {props.LaborIntensity}
              </span>
            </div>
            <div className={"history_data_container_item"}>
              <span className={"result_history_item"}>
                Тривалість розробки:
              </span>{" "}
              <span className={"result_history_value"}>
                {props.DevelopmentTime}
              </span>
            </div>
            <div className={"history_data_container_item"}>
              <span className={"result_history_item"}>
                Кількість розробників:
              </span>{" "}
              <span className={"result_history_value"}>
                {props.NumberOfDevelopers}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
