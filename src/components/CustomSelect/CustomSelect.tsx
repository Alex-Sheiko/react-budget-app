import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "context";
import { selectStyles } from "./styles";
import { CurrencyOption } from "types/types";

export const CustomSelect = () => {
  const { setCurrency, currencies, currentCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<CurrencyOption>) => {
    if (option) {
      setCurrency(option);
    }
  };
  return (
    <Select
      styles={selectStyles}
      options={currencies}
      value={currentCurrency}
      onChange={handleSelect}
      isMulti={false}
      isSearchable={false}
    />
  );
};
