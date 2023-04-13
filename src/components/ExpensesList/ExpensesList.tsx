import { ExpenseItem } from "components";
import { StyledEmpty, StyledList } from "./styles";
import { Expense } from "types/types";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  if (!expenses.length) {
    return <StyledEmpty> Oooops 🙈</StyledEmpty>;
  }
  return (
    <StyledList>
      {expenses.map(({ name, cost, id }) => (
        <ExpenseItem key={id} name={name} cost={cost} id={id} />
      ))}
    </StyledList>
  );
};
