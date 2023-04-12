import { ExpensesList, Title } from "components";
import { StyledExpenses } from "./styles";
import { useDebounce, useInput } from "hooks";
import { useExpensesContext } from "context";
import { Expense } from "types/types";
import { useEffect, useState } from "react";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  const debounceValue = useDebounce(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(debounceValue.toLowerCase())),
    );
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <ExpensesList expenses={filteredExpenses} />
    </StyledExpenses>
  );
};
