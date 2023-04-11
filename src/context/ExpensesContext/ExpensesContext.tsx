import { useState } from "react";
import { createContext, useContext } from "react";
import { ChildrenContextType, ExpenseContextType } from "types/types";

const ExpensesContext = createContext<ExpenseContextType>({} as ExpenseContextType);

export const useExpensesContext = () => useContext(ExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpenseContextType>(() => ({
    expenses: [],
    setNewExpense: (expense) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, expense],
      }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};
export const ExpensesContextProvider = ({ children }: ChildrenContextType) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
