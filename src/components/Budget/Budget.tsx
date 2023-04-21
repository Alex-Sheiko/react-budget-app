import { StyledBudget, StyledBudgetBox, StyledBudgetControls } from "./styles";
import { BudgetCard, CustomSelect, RemainingCard, SpentCard, Title } from "components";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledBudgetBox>
        <Title text="Budget App" />
        <CustomSelect />
      </StyledBudgetBox>
      <StyledBudgetControls>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBudgetControls>
    </StyledBudget>
  );
};
