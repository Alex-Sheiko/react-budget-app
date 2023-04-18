import { useCurrencyContext, useExpensesContext } from "context";
import { StyledSpentCard } from "./styles";

export const SpentCard = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spending = expenses.reduce((total, { cost }) => total + +cost, 0);

  return (
    <StyledSpentCard>
      Spent so far: {currentCurrency.value}
      {spending}
    </StyledSpentCard>
  );
};
