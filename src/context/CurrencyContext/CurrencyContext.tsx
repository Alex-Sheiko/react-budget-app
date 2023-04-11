import { useState } from "react";
import { createContext, useContext } from "react";
import { Currency } from "../../config/currency";
import { ChildrenContextType, CurrencyContextType, CurrencyOption } from "../../types/types";

const CurrencyContext = createContext<CurrencyContextType>({} as CurrencyContextType);
export const useCurrencyContext = () => useContext(CurrencyContext);

const options: CurrencyOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBR, label: "GBR" },
];

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextType>(() => ({
    currentCurrency: options[0],
    currencies: options,
    setCurrency: (option) => {
      setCurrencyContext((ctx) => ({
        ...ctx,
        currentCurrency: option,
      }));
    },
  }));
  return currencyContext;
};
export const CurrencyContextProvider = ({ children }: ChildrenContextType) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
