import $api from "./index";

export const getCalcModels = (savingType) => {
  return $api.get(`/calc?savingType=${savingType}`);
};

export const addCalcModel = (calcModel) => {
  return $api.post("/calc", calcModel);
};
