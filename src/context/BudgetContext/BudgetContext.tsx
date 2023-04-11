import { useState, createContext, useContext } from "react";
import { BudgetContextType, ChildrenContextType } from "types/types";

const BudgetContext = createContext<BudgetContextType>({} as BudgetContextType);
export const useBudgetContext = () => useContext(BudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextType>(() => ({
    budget: 0,
    setBudget: (value) => {
      setBudgetContext((ctx) => ({
        ...ctx,
        budget: value,
      }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({ children }: ChildrenContextType) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
