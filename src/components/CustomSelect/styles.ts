import { StylesConfig } from "react-select";
import { CurrencyOption } from "../../types/types";

export const selectStyles: StylesConfig<CurrencyOption> = {
  container: (base) => ({
    ...base,
    outline: "none",
  }),
  control: (base, state) => ({
    ...base,
    minHeight: "30px",
    fontSize: "12px",
    fontWeight: "400",
    border: "1px solid #EEEEEE",
    outline: "none",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#23C9FF;" : "#EEEEEE",
    },
  }),

  option: (base, state) => ({
    ...base,
    fontSize: "12px",
    cursor: "pointer",
    borderColor: "#2ED2C9",
    color: state.isSelected ? "#000000" : "#000000",
    backgroundColor: state.isSelected ? "#23C9FF" : "white",
    textAlign: "center",
    "&:hover": {
      backgroundColor: state.isFocused ? "rgba(35, 201, 255, 0.3)" : "rgba(46, 210, 201, 0.3)",
    },
  }),

  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "#EEEEEE",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#EEEEEE",
    padding: "3px",
  }),
};
