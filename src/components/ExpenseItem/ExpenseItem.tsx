import React from "react";
import { StyledButtonDelete, StyledItemBadge, StyledItemText, StyledListItem } from "./styles";
import { useCurrencyContext, useExpensesContext } from "context";

interface ExpenseItemProps {
  name: string;
  cost: number;
  id: string;
}

export const ExpenseItem = ({ name, cost, id }: ExpenseItemProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };
  return (
    <StyledListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {currentCurrency.value}
        {cost}
      </StyledItemBadge>
      <StyledButtonDelete onClick={handleDelete} />
    </StyledListItem>
  );
};
