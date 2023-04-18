import React from "react";
import { StyledBudget, StyledBudgetBox, StyledBudgetControls } from "./styles";
import { BudgetCard, CustomSelect, RemainingCard, Title } from "components";

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
      </StyledBudgetControls>
    </StyledBudget>
  );
};
