import { ExpensesList, Search, Title } from "components";
import { StyledEmpty, StyledExpenses } from "./styles";
import { useDebounce, useInput } from "hooks";
import { useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { Expense } from "types";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false);
  const debounceValue = useDebounce<string>(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(debounceValue.toLowerCase())),
    );
    setIsSearchPerformed(Boolean(debounceValue));
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Search {...search} />
      {isSearchPerformed ? (
        filteredExpenses.length > 0 ? (
          <ExpensesList expenses={filteredExpenses} />
        ) : (
          <StyledEmpty> No expenses found 🙈</StyledEmpty>
        )
      ) : expenses.length === 0 ? (
        <StyledEmpty> No expenses added yet 🤔</StyledEmpty>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </StyledExpenses>
  );
};
