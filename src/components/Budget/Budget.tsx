import React from "react";
import { StyledBudget, StyledBudgetBox, StyledBudgetControls } from "./styles";
import { BudgetCard, CustomSelect, Title } from "components";

export const Budget = () => {
  return (
    <StyledBudget>
      <StyledBudgetBox>
        <Title text="Budget App" />
        <CustomSelect />
      </StyledBudgetBox>
      <StyledBudgetControls>
        <BudgetCard />
        <Title text="Budget App5" />
      </StyledBudgetControls>
    </StyledBudget>
  );
};
