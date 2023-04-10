import { ReactNode, createContext, useState } from "react";
import { ExpenseType } from "../../types/types";

interface ExpensesContextState {
  expenses: ExpenseType[];
}

interface ExpensesContextProviderProps {
  children: ReactNode;
}

const ExpensesContext = createContext<ExpensesContextState>({} as ExpensesContextState);

export const useExpensesContextValue = () => {
  const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
    return {
      expenses: [],
    };
  });
  return expensesValue;
};

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
