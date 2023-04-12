import { ExpenseItem } from "components";
import { StyledList } from "./styles";
import { Expense } from "types/types";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  if (!expenses.length) {
    return <p> Ohhhhh... 🙈</p>;
  }
  return (
    <StyledList>
      {expenses.map(({ name, cost, id }) => (
        <ExpenseItem key={id} name={name} cost={cost} id={id} />
      ))}
    </StyledList>
  );
};
